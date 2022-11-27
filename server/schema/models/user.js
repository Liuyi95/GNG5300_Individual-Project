import mongoose from "mongoose";

export const User = mongoose.model("User", {
    id:String,
    name: String,
    email:String,
    password: String,
    favoritePicture:[Object]
});