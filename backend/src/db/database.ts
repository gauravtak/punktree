import mongoose from "mongoose";

export async function connect() {
    const uri = process.env.MONGODB_URI;
    if (!uri) { 
        throw new Error("MONGODB_URI is not defined");
    }
    try {
        await mongoose.connect(uri);
        console.log("✅ MONGODB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error("Error connecting to mongodb", err);
    }
}