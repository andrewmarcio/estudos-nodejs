import AppErrors from "@shared/http/errors/AppErros";
import { bcrypt } from "src/helpers/hash";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UsersRepository";


interface UserData {
    name: string,
    email: string,
    password : string,
    avatar : string
}

class UpdateUserService {
    public async execute(id: string, data: UserData): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        if(!user){
            throw new AppErrors("Usuário não encontrado.");
        }

        const isExistUser = await userRepository.findByEmail(data.email);

        if(isExistUser){
            throw new AppErrors("Já existe um usuário com este email.");
        }

        user.name = data.name;
        user.email = data.email;
        user.avatar = data.avatar;
        
        if(data.password){
            const encryptedPassword = await bcrypt(data.password);
            user.password = encryptedPassword;
        }

        await userRepository.save(user);

        return user; 
    }
}

export default UpdateUserService;