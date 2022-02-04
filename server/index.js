require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// // IMPORT YOUR SCHEMAS HERE
require("./models/TutorProfiles"); //This is just an example. Don't forget to delete this

const app = express();

// // This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});


app.use(bodyParser.json());
/*
// // IMPORT YOUR API ROUTES HERE
// // Below is just an example. Don't forget to delete it. 
// // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
// require("./routes/profilesRoutes")(app); 

*/

// GET Request (/): Returns a static HTML file index.html containing a favicon.ico, logo.png and reference to an external stylesheet styles.css
app.get("/", (_, res) => {
  res.header("Content-Type","text/html");
  res.status(200).sendFile("./public/index.html", { root: __dirname });
});

// MESSAGES SCREEN
// GET Request (/messages): Return all of the user's message
app.get('/todos', (_, res) => {
  res.header("Content-Type","application/json");
  res.status(200).send(todos);
});

// POST Request ('/todos'): Add a new todo to the todo list
app.post("/bookings", (req, res) => {
  res.header("Content-Type","application/json");

  if(req.body.name === undefined || req.body.due === undefined ||
    req.body.name === ""  || req.body.due === ""){
    res.status(400).end();
  }
  else {
    const currentDate = new Date;

    const newBooking = {
      "id": uuidv4(),
      "name": req.body.name,
      "created": currentDate.toISOString(),
      "due": req.body.due,
      "completed": false
    };

    todos.unshift(newTodo);

    fs.writeFile(todoFilePath, JSON.stringify(todos, null, 2), err => {
      if(err) {
        console.log("Error writing file", err);
        return;
      }
      res.status(201).send(todos);
    });
  }
});




// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`API running on port ${PORT}`);
// });
