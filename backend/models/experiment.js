const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
  ref: { type: String, required: true },
  title: { type: String, required: true },
  imageurl: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: String, required: true },
  interviewvideo: { type: String, required: true },
  infotext: { type: String, required: true },
  credits: { type: String, required: true },
  showcasevideo: { type: String, required: true },
  report: { type: String, required: true },
  telephone: { type: String, required: true },
  contactmail: { type: String, required: true },
  website: { type: String, required: true }
});

module.exports = mongoose.model('Experiment', experimentSchema);


