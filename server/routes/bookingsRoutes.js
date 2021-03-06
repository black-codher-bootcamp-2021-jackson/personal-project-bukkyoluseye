const mongoose = require('mongoose');
const moment = require('moment');
const Bookings = require('../models/Bookings');

// This API makes use of Mongoose model helper functions to query the data
const bookingsRoutes = (app) => {
    app.get(`/api/bookings`, async (req, res) => {
        const bookings = await Bookings.find({ sort: { date: 'asc' } })
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

    app.get(`/api/bookings/tutor/:id`, async (req, res) => {
        const { id } = req.params;
        console.log(id);
        if (id) {
            const booking = await Bookings.find({ tutorId: id })
                .populate('tutorId')
                .populate('studentId')
                .sort( { date: 'asc' } );

            return res.status(200).send({
                error: false,
                booking,
            });
        } else if (err) {
            return res.status(200).send({
                err,
            });
        }
    });

    app.get(`/api/bookings/:id`, async (req, res) => {
        const { id } = req.params;

        if (id) {
            const booking = await Bookings.findOne({ _id: id })
                .populate('tutorId')
                .populate('studentId');

            return res.status(200).send({
                error: false,
                booking,
            });
        } else if (err) {
            return res.status(500).send({
                err,
            });
        }
    });

    app.post(`/api/bookings/:date`, async (req, res) => {
        const dateBeforeMidnight = new Date(req.params.date).setHours(
            23,
            59,
            59,
            999
        );

        try {
            const booking = await Bookings.find({
                $and: [
                    { tutorId: req.body.id },
                    {
                        date: {
                            $gte: req.params.date,
                            $lte: dateBeforeMidnight,
                        },
                    },
                ],
            })
                .populate('tutorId')
                .populate('studentId');

            return res.status(200).send({
                error: false,
                booking,
            });
        } catch (err) {
            return res.status(500).send({
                err,
            });
        }
    });

    // app.post(`/api/bookings/search?studentname=:studentName`, async (req, res) => {
    //     // Search - find by bookings by tutor id - populate data first then find by student name

    //     const booking = await Bookings.find({
    //         tutorId: req.body.id,
    //     })
    //         .populate('tutorId')
    //         .populate('studentId');
    //     // studentId: {
    //     //     name: {
    //     //         first: req.params.studentName;
    //     //     }
    //     // }

    //     return res.status(200).send({
    //         error: false,
    //         booking,
    //     });
    //     // } catch (err) {
    //     //     return res.status(500).send({
    //     //         err,
    //     //     });
    //     // }
    // });

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
            status: 'Cancelled',
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
