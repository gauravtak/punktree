import Router from "express";
import { getAll, getById } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get("/all", getAll);
userRouter.get("/:id", getById);

export default userRouter;

