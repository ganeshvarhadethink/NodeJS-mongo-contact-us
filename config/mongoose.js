let mongoose = require('mongoose');

// set up mongoose
mongoose.connect('mongodb://127.0.0.1:27017/authService', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> {
    console.log('Database Connection Successful!!!');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });