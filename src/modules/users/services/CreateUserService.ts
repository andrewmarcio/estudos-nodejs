import AppErrors from "@shared/http/errors/AppErros";
import { bcrypt } from "src/helpers/hash";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repository/UsersRepository";


interface UserData {
    name: string,
    email: string,
    username: string,
    password: string,
    avatar: string
}

class CreateUserService {
    public async execute(data: UserData): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const isUserExists = await userRepository.findByEmail(data.email);
        const encryptedPassword = await bcrypt(data.password);
        
        if(isUserExists){
            throw new AppErrors("Usuário já possui registro.");
        }
        
        data.password = encryptedPassword;
        const user = userRepository.create(data);
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;