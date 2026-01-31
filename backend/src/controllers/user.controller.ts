import { Request, Response } from "express";
import { User } from "../models/user";

export const getAll = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (err) {
        console.error("Error getting all users", err);
        return res.status(500).send("Error getting all users");
    }
}

export const getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).send("User not found");
        return res.status(200).send(user);
    } catch (err) {
        console.error("Error getting all users", err);
        return res.status(500).send("Error getting all users");
    }
}