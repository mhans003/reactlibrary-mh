//Create Express App.
require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 3001;

//Set up Cookie Parser.
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Configure Mongoose.
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactbooksearch-mh", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//Include API Routes
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

//Include Auth Routes
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

//If API routes are not used, use the React app.
app.use(function(request, response) {
    response.sendFile(path.join(__dirname, "/client/build/index.html"));
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!`);
});