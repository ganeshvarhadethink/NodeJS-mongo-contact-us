let router = require('express').Router();

//Import controllers here 
var user = require('../controller/user');

//Routing without JWT Tokens
router.post('/createContact', user.createContact);
router.get('/contact-us',user.findAllContacts);

module.exports = router;