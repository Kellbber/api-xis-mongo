const swaggerUi = require('swagger-ui-express');
const controllerCarinho = require('../controllers/carrinho.controller');
const controllerXis = require('../controllers/xis.controller');
const swaggerDocument = require('../../swagger.json');

const express = require('express');
const router = express.Router();

const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/xis.middleware');

//rotas para o swagger
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

//rotas do carrinho
router.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
router.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarinho.createManyItemsCarrinhoController,
);
router.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

//rotas do xis
router.get('/all-xis', controllerXis.findAllXisController);
router.get('/one-xis/:id', validId, controllerXis.findByIdXisController);
router.post('/create-xis', validObjectBody, controllerXis.createXisController);
router.put(
  '/update-xis/:id',
  validId,
  validObjectBody,
  controllerXis.updateXisController,
);
router.delete('/delete-xis/:id', validId, controllerXis.deleteXisController);

module.exports = router;
