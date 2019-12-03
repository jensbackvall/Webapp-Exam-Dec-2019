const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
  ref: { type: String, required: true },
  question: { type: String },
  title: { type: String, required: true },
  imagePath: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  interviewvideo: { type: String, required: true },
  infotext: { type: String, required: true },
  credits: { type: String, required: true },
  showcasevideo: { type: String, required: true },
  report: { type: String, required: true },
  telephone: { type: Number, required: true },
  contactmail: { type: String, required: true },
  website: { type: String, required: true }
});

module.exports = mongoose.model('Experiment', experimentSchema);


