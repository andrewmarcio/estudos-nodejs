import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repository/UsersRepository";

class ListUserService {
    public async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);
        const users = await userRepository.find();
        return users;
    }
}

export default ListUserService;