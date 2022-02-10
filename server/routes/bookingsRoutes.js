const mongoose = require('mongoose');
const Bookings = require('../models/Bookings');

const bookingsRoutes = (app) => {
    app.get(`/api/bookings`, async (req, res) => {
        const bookings = await Bookings.find();

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
        const bookings = await Bookings.findOne({ id: req.params.id })
            .populate('tutorId')
            .populate('studentId');

        return res.status(200).send({
            error: false,
            bookings,
        });
    });

    app.put(`/api/bookings/:id`, async (req, res) => {
        const { id } = req.params;

        const bookings = await Bookings.findByIdAndUpdate(id, req.body);

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
