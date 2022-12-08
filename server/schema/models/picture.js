import mongoose from "mongoose";

export const Picture = mongoose.model("Picture", {
    id:String,
    name: String,
    url: String
});