import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import bookingRoute from "./api/routes/bookings.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
})

app.use(cors())
app.use(cookieParser())
app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json());



app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal Server Error";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messege: errorMessage,
        stack: err.stack,

    });
});


app.listen(8080, () => {
    connect()
    console.log("app is runing");

})