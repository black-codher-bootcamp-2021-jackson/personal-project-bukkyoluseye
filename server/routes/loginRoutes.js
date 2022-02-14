const mongoose = require('mongoose');

const loginRoutes = (app) => {
    app.get(`/api/tutorlogin`, async (req, res) => {
        console.log(req.body);

        return res.status(200);
    });
};

module.exports = bookingsRoutes;
