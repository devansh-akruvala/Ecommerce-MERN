import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, _id, dob, role, photo, gender } = req.body;
    const user = await User.create({
        name,
        email,
        _id,
        dob,
        role,
        photo,
        gender,
    });
    return res.status(201).json({
        success: true,
        message: `welcome, ${user.name}`,
    });
});
