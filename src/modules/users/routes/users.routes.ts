import { Router } from "express";
import UserController from "../controllers/UserController";
import { storeValitionRequest, updateValitionRequest } from "../validation/UserValidationRequest";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);
userRouter.post("/", storeValitionRequest(), userController.store);
userRouter.put("/:id", updateValitionRequest(), userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;