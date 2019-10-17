const express = require('express');
const router = express.Router();
const Experiment = require('../models/experiment');



router.post('', (req, res, next) => {

  console.log("Inside addexperiment");

  const experiment = new Experiment({
    ref: req.body.ref,
    title: req.body.title,
    imageurl: req.body.imageurl,
    artist: req.body.artist,
    year: req.body.year,
    interviewvideo: req.body.interviewvideo,
    infotext: req.body.infotext,
    credits: req.body.credits,
    showcasevideo: req.body.showcasevideo,
    report: req.body.report,
    telephone: req.body.telephone,
    contactmail: req.body.contactmail,
    website: req.body.website
  });
  experiment.save().then(createdExperiment => {
    res.status(201).json({
      message: "New Experiment added successfully!",
      experimentId: createdExperiment._id
    });
  });
  res.status(201).json({
    message: "Experiment added successfully!"
  });
});



router.put('/:id', (req, res, next) => {

  console.log("Inside update experiment");

  console.log("IDIDIDID: ", req.params.id);

  const experiment = new Experiment({
    _id: req.body.id,
    ref: req.body.ref,
    title: req.body.title,
    imageurl: req.body.imageurl,
    artist: req.body.artist,
    year: req.body.year,
    interviewvideo: req.body.interviewvideo,
    infotext: req.body.infotext,
    credits: req.body.credits,
    showcasevideo: req.body.showcasevideo,
    report: req.body.report,
    telephone: req.body.telephone,
    contactmail: req.body.contactmail,
    website: req.body.website
  });

  Experiment.updateOne({_id: req.params.id}, experiment).then(result => {
    console.log(result);
    res.status(200).json({message: "UPDATE SUCCESSFUL!"});
  });
});



router.get('', (req, res, next) => {

  console.log("Inside /api/experiments");

  Experiment.find().then(fetchedDocs => {
    console.log(fetchedDocs);
    res.status(200).json({
      message: "Experiments fetched successfully",
      experiments: fetchedDocs
    });
  });



router.delete('/:id', (req, res, next) => {
    Experiment.deleteOne({_id: req.params.id}).then(result => {
      console.log(result);
      res.status(200).json({ message: 'Experiment deleted' });
    });
  });
});

module.exports = router;
