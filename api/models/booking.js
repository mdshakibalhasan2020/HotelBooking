import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required: true,
    },
    StudentFatherName: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: String,
        required: true,
    },
    Semister: {
        type: String,
        required: true,
    },
    SemisterYear: {
        type: String,
        required: true,
    },
    Hall: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Room: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
export default mongoose.model("booking", bookingSchema);