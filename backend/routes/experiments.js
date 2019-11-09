const express = require('express');
const multer = require('multer');

const router = express.Router();

const Experiment = require('../models/experiment');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, 'backend/images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});


router.post(
  '',
  multer({storage: storage}).single("image"),
  (req, res, next) => {

  console.log("Inside addexperiment");
  const url = req.protocol + '://' + req.get("host");

  const experiment = new Experiment({
    ref: req.body.ref,
    question: req.body.question,
    title: req.body.title,
    imagePath: url + '/images/' + req.file.filename,
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

  console.log('THE IMAGE FILE NAME: ', req.file.filename);

  console.log('THE NEW EXPERIMENT: ', experiment);

  experiment.save().then(createdExperiment => {
    res.status(201).json({
      message: "New Experiment added successfully!",
      experiment: {
        id: createdExperiment._id,
        ref: createdExperiment.ref,
        question: createdExperiment.question,
        title: createdExperiment.title,
        imagePath: createdExperiment.imagePath,
        artist: createdExperiment.artist,
        year: createdExperiment.year,
        interviewvideo: createdExperiment.interviewvideo,
        infotext: createdExperiment.infotext,
        credits: createdExperiment.credits,
        showcasevideo: createdExperiment.showcasevideo,
        report: createdExperiment.report,
        telephone: createdExperiment.telephone,
        contactmail: createdExperiment.contactmail,
        website: createdExperiment.website
      }
    });
  });
});



router.put('/:id',
  multer({storage: storage}).single("image"),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename
    }
  const experiment = new Experiment({
    _id: req.body.id,
    ref: req.body.ref,
    question: req.body.question,
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
    // console.log(result);
    res.status(200).json({message: "UPDATE SUCCESSFUL!"});
  });
});


router.get('', (req, res, next) => {
  Experiment.find().then(fetchedDocs => {
    console.log(fetchedDocs);
    res.status(200).json({
      message: "Experiments fetched successfully",
      experiments: fetchedDocs
    });
  });


router.get('/:id', (req, res, next) => {
  Experiment.findById(req.params.id).then(experiment => {
    if (experiment) {
      console.log("AN EXPERIMENT HAS BEEN FOUND!!!");
      console.log(experiment);
      res.status(200).json({ experiment });
    } else {
      res.status(404).json({ message: "Experiment not found!!"});
    }
  })
});


router.delete('/:id', (req, res, next) => {
    Experiment.deleteOne({_id: req.params.id}).then(result => {
      // console.log(result);
      res.status(200).json({ message: 'Experiment deleted' });
    });
  });
});

module.exports = router;
