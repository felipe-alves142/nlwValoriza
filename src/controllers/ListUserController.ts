import {Request,Response} from "express"
import { RepositoryNotTreeError } from "typeorm";
import {ListUsersService} from "../service/ListUsersService"

class ListUserController{

    async handle(request:Request,response:Response){
        const listUserService = new ListUsersService();

        const users = await listUserService.execute();

        return response.json(users);

    }
}
export {ListUserController}