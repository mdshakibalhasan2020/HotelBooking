import express from "express";
//import booking from "../models/booking.js";
//import { createError } from "../utils/error.js";
import { createBooking, updateBooking, deleteBooking, getBooking, getBookings } from "../controllers/booking.js";
const router = express.Router();
//create 
router.post("/", createBooking);
//update
router.put("/:id", updateBooking);
//delete
router.delete("/:id", deleteBooking);
//get booking 
router.get("/:id", getBooking);
//get all booking 
router.get("/", getBookings);
export default router;