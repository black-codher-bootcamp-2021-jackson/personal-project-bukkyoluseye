const mongoose = require("mongoose");
const StudentProfile = mongoose.model("studentprofile");
// const session = require("express-session");

const studentProfileRoutes = (app) => {
  app.get(`/api/studentprofile`, async (req, res) => {
    const studentprofiles = await StudentProfile.find();

    return res.status(200).send(studentprofiles);
  });

  app.post(`/api/studentprofile`, async (req, res) => {
      const studentprofiles = await StudentProfile.create(req.body);

      return res.status(201).send({
          error: false,
          studentprofiles,
      });
  });

  app.put(`/api/studentprofile/:id`, async (req, res) => {
      const { id } = req.params;

      const studentprofiles = await StudentProfile.findByIdAndUpdate(
          id,
          req.body
      );

      return res.status(202).send({
          error: false,
          studentprofiles,
      });
  });

  app.delete(`/api/studentprofile/:id`, async (req, res) => {
      const { id } = req.params;

      const studentprofiles = await StudentProfile.findByIdAndDelete(id);

      return res.status(202).send({
          error: false,
          studentprofiles,
      });
  });
};

module.exports = studentProfileRoutes;
