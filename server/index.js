const express = require("express");
const cors = require("cors");
const logger = require("morgan");

require("dotenv").config();


// get all routes
const router = require("./routes/routes");

const app = express();


// connect and use db
require("./utils/db")();



// configure passport middleware
require("./middlewares/passport");

// configure middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));



app.get("/", (req, res) => {
    res.json("Welcome bro")
});

app.use('/api/v1', router);


// hanlde all uncaught errors ==> internal server error
app.use((error, res) => {
    error.statusCode = error.statusCode || 500,
    error.message = error.message || "Internal server error",
    res.status(error.statusCode).json({
        message: error.message
    });
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log(`App started and running on port ${PORT} successfully`);
});