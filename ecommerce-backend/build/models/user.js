import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        require: [true, "Enter Id"],
    },
    photo: {
        type: String,
    },
    name: {
        type: String,
        require: [true, "Please enter name"]
    },
    email: {
        type: String,
        require: [true, "Please enter name"],
        unique: [true, "Email already exist"],
        validate: validator.default.isEmail
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        require: [true, "Enter gender"]
    },
    dob: {
        type: Date,
        require: [true, "Enter Date of Birth"]
    }
}, {
    timestamps: true
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth()) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);
