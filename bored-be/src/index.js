import express from "express";
import bodyParser from "body-parser";

// const express = require('express');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send (`Server listening on port ${port}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});