const mongoose = require('mongoose');
const TutorProfile = mongoose.model('tutorprofile');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
// const session = require("express-session");

const tutorProfileRoutes = (app) => {
    app.get(`/api/tutorprofile`, async (req, res) => {
        const tutorprofiles = await TutorProfile.find();

        return res.status(200).send(tutorprofiles);
    });

    app.post(`/api/tutorprofile/signup`, async (req, res) => {
        const takenEmail = await TutorProfile.findOne({
            email: req.body.email,
        });

        if (!takenEmail) {
            try {
                const newPassword = await bcrypt.hash(req.body.password, 10);
                const tutorprofile = await TutorProfile.create({
                    name: { first: req.body.firstname, last: req.body.surname },
                    email: req.body.email.toLowerCase(),
                    password: newPassword,
                });
                console.log(tutorprofile);

                return res.status(201).send({
                    error: false,
                    tutorprofile,
                });
            } catch (err) {
                return res.status(500).send({ err });
            }
        } else {
            return res.status(500).send({
                error: 'An account already exists with this email address',
            });
        }
    });

    app.post(`/api/tutorprofile/login`, async (req, res) => {
        const tutorprofile = await TutorProfile.findOne({
            email: req.body.email.toLowerCase(),
        });

        if (tutorprofile === null) {
            res.status(400).send(
                'The email address or password entered is incorrect. Please try again.'
            );
        }
        try {
            const isPasswordValid = await bcrypt.compare(
                req.body.password,
                tutorprofile.password
            );

            if (isPasswordValid) {
                const token = jwt.sign(
                    { email: tutorprofile.email },
                    process.env.SECRET
                );
                return res.status(201).send({
                    error: false,
                    tutorprofile: token,
                });
            } else if (err) {
                return res.status(500).send({
                    error: 'The email address or password entered is incorrect. Please try again.',
                    err,
                });
            }
        } catch (err) {
            return res.status(500).send({
                error: 'The email address or password entered is incorrect. Please try again.',
                err,
            });
        }
    });
    const verifyJWT = (req, res, next) => {
        const token = req.headers['x-access-token']?.split(' ')[1];

        if (token) {
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    return res.status(500).send({
                        error: 'Failed to Authenticate',
                        isLoggedIn: false,
                        err,
                    });
                }
                req.user = {};
                req.user.id = decoded.id;
                req.user.email = decoded.email;

                next();
            });
        } else {
            return res.status(500).send({
                error: 'Log in failed. Please try again',
                isLoggedIn: false
            });
        }
    };
    app.get(`/api/tutorprofile/login`, verifyJWT, async (req, res) => {
        res.status(200).send({isLoggedIn:true})
        // try {
        //     const decoded = jwt.verify(token, process.env.SECRET);
        //     const email = decoded.email;
        // } catch (err) {}
        // const tutorprofile = await TutorProfile.findOne({
        //     email: req.body.email,
        //     password: req.body.password,
        // });

        // if (tutorprofile) {
        //     const token = jwt.sign(
        //         { email: tutorprofile.email },
        //         process.env.SECRET,
        //         { expiresIn: 907200 }
        //     );
        //     return res.status(201).send({
        //         error: false,
        //         tutorprofile: token,
        //     });
        // } else {
        //     return res.status(500).send({
        //         error: 'The email address or password entered is incorrect. Please try again.',
        //         tutorprofile,
        //     });
        // }
    });

    app.put(`/api/tutorprofile/:id`, async (req, res) => {
        const { id } = req.params;

        const tutorprofiles = await TutorProfile.findByIdAndUpdate(
            id,
            req.body
        );

        return res.status(202).send({
            error: false,
            tutorprofiles,
        });
    });

    app.delete(`/api/tutorprofile/:id`, async (req, res) => {
        const { id } = req.params;

        const tutorprofiles = await TutorProfile.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            tutorprofiles,
        });
    });
};

module.exports = tutorProfileRoutes;
