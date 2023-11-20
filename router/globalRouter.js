import express from "express";
import { home,search } from "../controller/boardController.js";
import { join,login } from "../controller/userController.js";

const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
globalRouter.get("/search",search);

export default globalRouter;