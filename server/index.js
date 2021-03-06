require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// // IMPORT YOUR SCHEMAS HERE
require('./models/TutorProfile');
require('./models/StudentProfile');
require('./models/Bookings');
require('./models/Subjects');

const app = express();

// // This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cors());
/*
// // IMPORT YOUR API ROUTES HERE
// // Below is just an example. Don't forget to delete it. 
// // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
*/
require('./routes/tutorprofilesRoutes')(app);
require('./routes/bookingsRoutes')(app);
require('./routes/studentprofilesRoutes')(app);
require('./routes/subjectsRoutes')(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
