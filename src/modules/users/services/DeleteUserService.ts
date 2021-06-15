import AppErrors from "@shared/http/errors/AppErros";
import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repository/UsersRepository";

class DeleteUserService {
    public async execute(id: string): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);
        
        if(!user){
            throw new AppErrors("usuário não encontrado.");
        }

        await userRepository.remove(user);
    }
}

export default DeleteUserService;