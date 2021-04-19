const mongoose = require("mongoose");

const Time = mongoose.model("Time", {
  text: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = { Time };
