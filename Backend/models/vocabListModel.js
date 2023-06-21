const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Vocab = new Schema(
    {
        vocab: { type: String, required: true },
        sound: { type: String, required: false },
        meaning: {type: String, required: true },
        POS: { type: String, required: true },
        difficulty: { type: Number, required: true},
    },
    { timestamps: false },
);

module.exports = mongoose.model('vocabs', Vocab);