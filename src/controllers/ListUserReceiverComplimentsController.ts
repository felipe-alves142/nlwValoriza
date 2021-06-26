import { Request, Response } from "express";
import { ListUserReceiveComplimenstService } from "../service/ListUserReceiveComplimentsService";

class ListUserReceiverComplimenstController{
 async handle(request:Request, response:Response){
     const {user_id} = request;
    
     const listUserReceiverComplimenstService = new ListUserReceiveComplimenstService();

     const compliments= await listUserReceiverComplimenstService.execute(user_id);

     return response.json(compliments);
 }
}

export {ListUserReceiverComplimenstController}