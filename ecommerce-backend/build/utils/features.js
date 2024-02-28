import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017", {
        dbName: "Ecommerce",
    })
        .then((c) => console.log(`Db connected at ${c.connection.host}`))
        .catch((e) => console.log(e));
};
