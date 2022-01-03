import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const boredSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    minPlayers: Number,
    maxPlayers: Number,
    minPlayTime: Number,
    maxPlayTime: Number,
    playerAges: Number,
    numberOfPlays: Number,
    comments: [{body: String, date: Date}]
});