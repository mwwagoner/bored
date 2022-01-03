import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/boredRoutes";

// const express = require('express');
const app = express();
const port = 8000;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bored', {
    useNewURLParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app)

app.get('/', (req,res) => {
    res.send (`Server listening on port ${port}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});