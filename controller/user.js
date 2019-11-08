var kue = require('kue');
var jobs = kue.createQueue();
var User = require('../model/user');

// Get all Contacts
exports.findAllContacts = function (req, res) {
  User.find()
    .select('_id talkAbout timeFrame projectType budget description requester name companyName email phoneNumber')
    .then((allUsers) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all Users',
        User: allUsers,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
};


// create new Contact
exports.createContact = function (req, res) {
  var job = jobs.create('new job', {
    talkAbout: req.body.talkAbout,
    timeFrame: req.body.timeFrame,
    projectType: req.body.projectType,
    budget: req.body.budget,
    description: req.body.description,
    requester: req.body.requester,
    name: req.body.name,
    companyName: req.body.companyName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });
  job.save();
  console.log("JOB.DATA====================", job.data);

  const user = new User(
    {
      talkAbout: job.data.talkAbout,
      timeFrame: job.data.timeFrame,
      projectType: job.data.projectType,
      budget: job.data.budget,
      description: job.data.description,
      requester: job.data.requester,
      name: job.data.name,
      companyName: job.data.companyName,
      email: job.data.email,
      phoneNumber: job.data.phoneNumber,
    }
  );
  return user.save().then((newUser) => {
    return res.status(201).json({
      success: true,
      message: 'New user created',
      User: newUser,
    });
  })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });

};
