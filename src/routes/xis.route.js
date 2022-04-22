const express = require('express');
const router = express.Router();
const controllerXis = require('../controllers/xis.controller');
const {validId, validObjectBody} = require("../middlewares/xis.middleware");


router.get('/all-xis', controllerXis.findAllXisController)
router.get('/one-xis/:id', validId, controllerXis.findByIdXisController);
router.post('/create-xis', validObjectBody, controllerXis.createXisController);
router.put('/update-xis/:id',validId, validObjectBody, controllerXis.updateXisController);
router.delete('/delete-xis/:id', validId, controllerXis.deleteXisController);


module.exports = router;
