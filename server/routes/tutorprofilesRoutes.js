const mongoose = require("mongoose");
const TutorProfile = mongoose.model("tutorprofile");
// const session = require("express-session");

const tutorProfileRoutes = (app) => {
  app.get(`/api/tutorprofile`, async (req, res) => {
    const tutorprofiles = await TutorProfile.find();

    return res.status(200).send(tutorprofiles);
  });

  app.post(`/api/tutorprofile`, async (req, res) => {
    const tutorprofiles = await TutorProfile.create(req.body);

    return res.status(201).send({
      error: false,
      tutorprofiles,
    });
  });

  app.put(`/api/tutorprofile/:id`, async (req, res) => {
    const { id } = req.params;

    const tutorprofiles = await TutorProfile.findByIdAndUpdate(id, req.body);

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
