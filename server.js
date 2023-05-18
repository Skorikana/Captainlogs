const express = require("express")
const Logs = require("./models/logs")
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Instantiate express
const app = express();
//Other variables
const port = 3000;

//Add dotenv
require('dotenv').config();

const logsController = require("./controllers/logs")

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Mongoose info
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Middleware 
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

//Routes Controller
app.use("/logs" ,logsController)

//Listen 
app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})
