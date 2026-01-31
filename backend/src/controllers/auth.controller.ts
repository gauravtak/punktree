import { Request, Response } from "express";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { AuthRequest } from "../middlewares/auth.middleware";

export const register = async (req: AuthRequest, res: Response) => {
    const {username, email, password} = req.body;
    try {
        if (!email) {
            return res.status(400).send("Email is required");
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }
        const hashedPassword = await argon2.hash(password);
        const user = new User({username, email, password: hashedPassword});
        await user.save();
        return res.status(201).send("User created successfully");
    } catch (err) {
        console.error("Error creating user", err);
        return res.status(500).send("Error creating user");
    }
}


export const login = async (req: AuthRequest, res: Response) => {
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return res.status(404).send("Email does not exists");
        }

        const checkPassword = await argon2.verify(existingUser.password, password);
        if (!checkPassword) {
            return res.status(401).send("Invalid password");
        }

        const payload = {
            id: existingUser._id,
            email: existingUser.email,
            username: existingUser.username,
        }

        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
            expiresIn: "1d"
        }, 
        ) 

        return res.status(200).send({message: "Login successful", accessToken});
    } catch (err) {
        console.error("Error logging in", err);
        return res.status(500).send("Error logging in");        
    }
}