const mongoose = require('mongoose');
const TutorProfile = mongoose.model('tutorprofile');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs')
// const session = require("express-session");

const tutorProfileRoutes = (app) => {
    app.get(`/api/tutorprofile`, async (req, res) => {
        const tutorprofiles = await TutorProfile.find();

        return res.status(200).send(tutorprofiles);
    });

    app.post(`/api/tutorprofile/signup`, async (req, res) => {
      try {
          const newPassword = await bcrypt.hash(req.body.password, 10)
            const tutorprofile = await TutorProfile.create({
                name: { first: req.body.name.first, last: req.body.name.last },
                email: req.body.email,
                password: newPassword,
            });

            return res.status(201).send({
                error: false,
                tutorprofile,
            });
        } catch (err) {
            return res.status(403).send({
                error: 'An account already exists with this email address',
                tutorprofile,
            });
        }
    });

    app.post(`/api/tutorprofile/login`, async (req, res) => {
        const tutorprofile = await TutorProfile.findOne({
            email: req.body.email,
        });
      
      const isPasswordValid = await bcrypt.compare(req.body.password, tutorprofile.password)

        if (isPasswordValid) {
            const token = jwt.sign(
                { email: tutorprofile.email },
                process.env.SECRET
            );
            return res.status(201).send({
                error: false,
                tutorprofile: token,
            });
        } else {
            return res.status(403).send({
                error: 'The email address or password entered is incorrect. Please try again.',
                tutorprofile,
            });
        }
    });

    app.get(`/api/tutorprofile/login`, async (req, res) => {
        const token = req.headers['x-access-token'];
        try {
            const decoded = jwt.verify(token, process.env.SECRET);
            const email = decoded.email;
        } catch (err) {}
        const tutorprofile = await TutorProfile.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if (tutorprofile) {
            const token = jwt.sign(
                { email: tutorprofile.email },
                process.env.SECRET
            );
            return res.status(201).send({
                error: false,
                tutorprofile: token,
            });
        } else {
            return res.status(403).send({
                error: 'The email address or password entered is incorrect. Please try again.',
                tutorprofile,
            });
        }
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
