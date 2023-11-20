import express from "express";
import { see , edit, remove } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/edit",edit);
userRouter.get("/delete",remove);
userRouter.get("/:id",see);

export default userRouter;


