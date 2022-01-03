import mongoose from "mongoose";
import { boredSchema } from "../models/boredModel";

const Bored = mongoose.model('Bored', boredSchema);

export const addNewGame = (req, res) => {
    let newGame = new Bored(req.body);

    newGame.save((err, Bored) => {
        if (err) {
            res.send(err)
        };
        res.json(Bored)
    })
};