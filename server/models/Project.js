const mongoose = require("mongoose");

const ProjectSchemaDB = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  phone: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchemaDB);
