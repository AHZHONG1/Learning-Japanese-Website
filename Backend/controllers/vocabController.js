const Vocab = require("../models/vocabListModel");

createVocab = (req, res) => {

    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a vocab",
        });
    }

    const vocab = new Vocab(body);

    if (!vocab) {
        return res.status(400).json({ success: false, error: err });
    }

    vocab
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: vocab._id,
                message: "Vocab created!",
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Vocab not created!",
            });
        });
}

updateVocab = async (req, res) => {

    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a body to update",
        });
    }

    await Vocab.findOne({ _id: req.params.id }).then((vocab) => {
        vocab.vocab = body.vocab;
        vocab.sound = body.sound;
        vocab.meaning = body.meaning;
        vocab.POS = body.POS;
        vocab.difficulty = body.difficulty;
        vocab
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: vocab._id,
                    message: "Vocab updated!",
                });
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: "Vocab not updated!",
                });
            })
    }).catch(err => {
        return res.status(404).json({
            err,
            message: "Vocab not found!",
        });
    });
}

deleteVocab = async (req, res) => {
    await Vocab.findOneAndDelete({ _id: req.params.id }).then((vocab) => {
        if (!vocab) {
            return res
                .status(404)
                .json({ success: false, error: "Vocab not found" });
        }

        return res.status(200).json({ success: true, data: vocab });
    }).catch(err => {
        return res.status(400).json({ success: false, error: err });
    });
}

getVocabById = async (req, res) => {
    await Vocab.findOne({ _id: req.params.id }).then((vocab) => {
        if (!vocab) {
            return res
                .status(404)
                .json({ success: false, error: "Vocab not found" });
        }

        return res.status(200).json({ success: true, data: vocab });
    }).catch(err => {
        return res.status(400).json({ success: false, error: err });
    });
}

getVocabs = async (req, res) => {
    await Vocab.find({ }).then((vocabs) => {
        if (!vocabs.length) {
            return res
                .status(404)
                .json({ success: false, error: "Vocab not found" });
        }

        return res.status(200).json({ success: true, data: vocabs });
    }).catch(err => {
        return res.status(400).json({ success: false, error: err });
    });
}

module.exports = {
    createVocab,
    updateVocab,
    deleteVocab,
    getVocabs,
    getVocabById,
};