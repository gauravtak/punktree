import Router from "express";
import { getAllByUserId } from "../controllers/social-link.controller";
const socialLinkRouter = Router();

socialLinkRouter.get("/all", getAllByUserId);

export default socialLinkRouter;

