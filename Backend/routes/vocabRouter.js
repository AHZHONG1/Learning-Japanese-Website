const express = require("express");

const VocabController = require("../controllers/vocabController");

const router = express.Router();

router.post('/vocab', VocabController.createVocab);
router.put('/vocab/:id', VocabController.updateVocab);
router.delete('/vocab/:id', VocabController.deleteVocab);
router.get('/vocab/:id', VocabController.getVocabById);
router.get('/vocabs', VocabController.getVocabs);

module.exports = router;