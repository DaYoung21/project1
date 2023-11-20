import express from "express";
import { home,search } from "../controller/boardController.js";
import { join,login,registerUser,loginUser } from "../controller/userController.js";

const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get("/join",join);
globalRouter.post("/register",registerUser)
globalRouter.get("/login",login);
globalRouter.post("/loginuser",loginUser)
globalRouter.get("/search",search);

export default globalRouter;