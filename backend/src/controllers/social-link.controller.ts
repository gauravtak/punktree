import { Request, Response } from "express"
import { AuthRequest } from "../middlewares/auth.middleware";
import { SocialLink } from "../models/socialLink";



export const getAllByUserId = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    try {
       const socialLinks = await SocialLink.find({userId});
       if (socialLinks.length === 0) {
           return res.status(200).send({links: [], count: 0});
       } 
       return res.status(200).send({links: socialLinks, count: socialLinks.length});
    } catch(err) {
        console.error("Error getting social links", err);
        return res.status(500).send("Error getting social links");
    }
}