const mongoose = require('mongoose');
const Subject = mongoose.model('subject');

const subjectsRoutes = (app) => {
    app.get(`/api/subjects`, async (req, res) => {
        const subject = await Subject.find().sort({ name: 'asc' });

        return res.status(200).send(subject);
    });
};

module.exports = subjectsRoutes;
