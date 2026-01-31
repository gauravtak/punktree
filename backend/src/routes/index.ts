import Router from "express";
import authRouter from "./auth";
import userRouter from "./user";
import socialLinkRouter from "./social-link";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", authMiddleware ,userRouter);
router.use("/social-link", authMiddleware ,socialLinkRouter);

export default router;
