import mongoose from "mongoose";

export const Picture = mongoose.model("Picture", {
    name: String,
    url: String
});