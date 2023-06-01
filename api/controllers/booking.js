import booking from "../models/booking.js"
export const createBooking = async(req, res, next) => {
    const newBooking = new booking(req.body);

    try {
        const savebooking = await newBooking.save();
        res.status(200).json(savebooking);

    } catch (err) {
        next(err);
    }
}
export const updateBooking = async(req, res, next) => {
    try {
        const updatebooking = await booking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatebooking);

    } catch (err) {
        next(err)
    }

}
export const deleteBooking = async(req, res, next) => {
    try {
        await booking.findByIdAndDelete(req.params.id);
        res.status(200).json("booking has been canel.");

    } catch (err) {
        next(err)
    }
}
export const getBooking = async(req, res, next) => {
    try {
        const booking = await booking.findById(req.params.id);
        res.status(200).json(booking);

    } catch (err) {
        next(err)
    }
}
export const getBookings = async(req, res, next) => {
    try {
        const bookings = await booking.find();
        res.status(200).json(bookings);

    } catch (err) {
        next(err)
    }
}