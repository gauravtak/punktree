import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

export const SocialLink = mongoose.model("SocialLink", socialLinkSchema);