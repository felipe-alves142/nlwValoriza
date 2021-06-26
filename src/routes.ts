import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import {ensureAuthenticated } from "./middlewares/ensureAuthenticate";
import { ListUserReceiveComplimenstService } from "./service/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimenstController } from "./controllers/ListUserReceiverComplimentsController";
import {ListTagsController} from "./controllers/ListTagsController";
import {ListUserController} from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
// const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimenstController = new ListUserReceiverComplimenstController();
const listUserSendComplimenstController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();


router.post("/tags", ensureAuthenticated ,ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliment/send", 
            ensureAuthenticated,
            listUserSendComplimenstController.handle)
router.get("/users/compliment/receive",
            ensureAuthenticated,
            listUserReceiverComplimenstController.handle);
router.get("/users",ensureAuthenticated, listUserController.handle)





export { router };

