const express = require('express');
const router = express.Router();

const calculatorController = require('../controllers/calculatorController');


router.get('/panel', calculatorController.listPanel);

router.post('/update', calculatorController.update);

router.get('/inserirmatch', calculatorController.inserirmatch);
router.post('/addMatch', calculatorController.saveMatch);
router.get('/editMatch/:id', calculatorController.editMatch);
router.post('/updateMatch/:id', calculatorController.updateMatch);
router.get('/deleteMatch/:id', calculatorController.deleteMatch);

router.get('/inseririnvestimentos', calculatorController.inseririnvestimentos);
router.post('/addInvestimentos', calculatorController.saveInvestimentos);
router.get('/editInvestimentos/:id', calculatorController.editInvestimentos);
router.post('/updateInvestimentos/:id', calculatorController.updateInvestimentos);
router.get('/deleteInvestimentos/:id', calculatorController.deleteInvestimentos);

router.get('/inserirvalores', calculatorController.inserirvalores);
router.post('/addValores', calculatorController.saveValores);
router.get('/editValores/:id', calculatorController.editValores);
router.post('/updateValores/:id', calculatorController.updateValores);
router.get('/deleteValores/:id', calculatorController.deleteValores);

router.get('/', calculatorController.listCalculadora);


module.exports = router;
