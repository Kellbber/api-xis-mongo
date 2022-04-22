const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParametro = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParametro)) {
    return res.status(400).send({ message: 'ID não existe!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {;
const xis = req.body;
  if (
    !xis ||
    !xis.sabor ||
    !xis.preco ||
    !xis.descricao ||
    !xis.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos preenchidos!' });
  }
    next();
};


module.exports = {
    validId,
    validObjectBody,
   
  }
