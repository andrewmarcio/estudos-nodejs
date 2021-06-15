import AppErrors from "@shared/http/errors/AppErros";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UsersRepository";

class ShowUserService {
    public async execute(id: string): Promise<User | undefined> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        if(!user){
            throw new AppErrors("Usuárioo não encontrado");
        }

        return user;
    }
}

export default ShowUserService;