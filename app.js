// import dependencies
let express = require('express');
let apiRoutes = require('./routes/index.routes');
let body_parser = require('body-parser');

// set up dependencies
let app = express();
require('./config/mongoose');

//configure body-parser
app.use(body_parser.json());                                     
app.use(body_parser.urlencoded({extended: true}));               
app.use(body_parser.text());                                    
app.use(body_parser.json({ type: 'application/json'})); 

  // set up port
let port = process.env.PORT || 8000;

// set up route
app.get('/', (req,res) => res.send("Nodejs Server with Express"));
app.use('/UserAuth', apiRoutes);

app.listen(port, function() {
        console.log("Running on port",  port);
})


