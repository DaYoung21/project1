import express from "express";
import globalRouter from "./router/globalRouter.js"
import userRouter from "./router/userRouter.js"
import boardRouter from "./router/boardRouter.js"

const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/board",boardRouter);

app.listen(PORT)