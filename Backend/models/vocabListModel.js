const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Vocab = new Schema(
    {
        No : { type: Number, required: true },
        vocab: { type: String, required: true },
        sound: { type: String, required: false },
        meaning: {type: String, required: true },
        meaningAns: {type: String, required: true},
        POS: { type: String, required: true },
        exampleText: { type: String, required: true },
        exampleTranslate: { type: String, required: true },
        exampleMeaning: { type: String, required: true },
        difficulty: { type: Number, required: true},
    },
    { timestamps: false },
);

module.exports = mongoose.model('vocabs', Vocab);