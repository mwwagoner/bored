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

export const getGameById = (req, res) => {
    Bored.findOne({_id: req.params.gameId}, (err, Game) => {
        if(err) {
            res.send(err)
        }
        res.json(Game)
    })
};

export const updateGameById = (req, res) => {
    Bored.findOneAndUpdate({_id: req.params.gameId}, req.body, {new: true}, (err, Game) => {
        if(err) {
            res.send(err)
        }
        res.json(Game)
    })
};

export const getGames = (req, res) => {
    Bored.find({}, (err, Games) => {
        if(err) {
            res.send(err)
        }
        res.send(Games)
    })
};