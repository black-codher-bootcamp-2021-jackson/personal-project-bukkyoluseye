const mongoose = require('mongoose');
const moment = require('moment');
const Bookings = require('../models/Bookings');

// This API makes use of Mongoose model helper functions to query the data
const bookingsRoutes = (app) => {
    app.get(`/api/bookings`, async (req, res) => {
        const bookings = await Bookings.find({ sort: { Date: 'asc' } })
            .populate('tutorId')
            .populate('studentId');

        return res.status(200).send(bookings);
    });

    app.post(`/api/bookings`, async (req, res) => {
        const bookings = await Bookings.create(req.body);

        return res.status(201).send({
            error: false,
            bookings,
        });
    });

    app.get(`/api/bookings/:id`, async (req, res) => {
        const { id } = req.params;
        const booking = await Bookings.find({tutorId: id})
            .populate('tutorId')
            .populate('studentId');

        return res.status(200).send({
            error: false,
            booking,
        });
    });

    app.post(`/api/bookings/:date`, async (req, res) => {
        const { date } = req.params;
        const bookingDate = await Bookings.find
        try {
            const booking = await Bookings.find({ date: date })
                .populate('tutorId')
                .populate('studentId');

            return res.status(200).send({
                error: false,
                booking,
            })
        }
        catch (err) {
            return res.status(500).send({
                err
            })
        };
    });

    app.put(`/api/bookings/:id`, async (req, res) => {
        const { id } = req.params;

        const bookings = await Bookings.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            bookings,
        });
    });

    app.patch(`/api/bookings/:id/cancelled`, async (req, res) => {
        const { id } = req.params;

        const bookings = await Bookings.findByIdAndUpdate(id, {
            cancelled: true,
            status: 'cancelled',
        });

        return res.status(202).send({
            error: false,
            bookings,
        });
    });

    app.patch(`/api/bookings/:id/completed`, async (req, res) => {
        const { id } = req.params;

        const bookings = await Bookings.findByIdAndUpdate(id, {
            completed: true,
        });

        return res.status(202).send({
            error: false,
            bookings,
        });
    });

    app.delete(`/api/bookings/:id`, async (req, res) => {
        const { id } = req.params;

        const bookings = await Bookings.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            bookings,
        });
    });
};

module.exports = bookingsRoutes;
