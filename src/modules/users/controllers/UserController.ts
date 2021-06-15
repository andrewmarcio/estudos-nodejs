import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";
import UpdateUserService from "../services/UpdateUserService";

class UserController {

    public async index(request: Request, response: Response): Promise<Response> {
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        
        return response.status(200).json(users);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        
        const { id } = request.params;

        const showUserService = new ShowUserService();
        const user = await showUserService.execute(id);
        
        return response.status(200).json(user);
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const {name, email, username, password, avatar} = request.body;

        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name, email, username, password, avatar
        });

        return response.status(200).json(user);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const {name, email, password, avatar} = request.body;

        const updateUser = new UpdateUserService();
        const user = await updateUser.execute(id , {
            name, email, password, avatar
        });

        return response.status(200).json(user);
    }

    public async delete(request: Request, response: Response): Promise<Response>
    {
        const { id } = request.params;

        const deleteUser = new DeleteUserService();
        deleteUser.execute(id);

        return response.status(200).json({
            message: "Produto deletado com sucesso!"
        });
    }
}

export default UserController;