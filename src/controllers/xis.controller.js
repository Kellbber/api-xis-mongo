const mongoose = require('mongoose');
const xisService = require('../services/xis.service');

const findAllXisController = async (req, res) => {
  const allXis = await xisService.findAllXisService();
  if (allXis.length == 0) {
    return res
      .status(404)
      .send({ message: 'Nenhum xis cadastrado no momento...' });
  }

  res.send(allXis);
};

const findByIdXisController = async (req, res) => {
  const idParametro = req.params.id;
  const chosenXis = await xisService.findByIdXisService(idParametro);
  if (!chosenXis) {
    return res.status(404).send({ message: 'Xis não encontrado!' });
  }
  res.send(chosenXis);
};
const createXisController = async (req, res) => {
  const xis = req.body;
  const newXis = await xisService.createXisService(xis);
  res.status(201).send(newXis);
};

const updateXisController = async (req, res) => {
  const idParametro = req.params.id;
  const editXis = req.body;
  const updateXis = await xisService.updateXisService(idParametro, editXis);
  res.send(updateXis);
};

const deleteXisController = async (req, res) => {
  const idParametro = req.params.id;
  await xisService.deleteXisService(idParametro);
  res.send({ message: 'Xis deletado com sucesso!' });
};

module.exports = {
  findAllXisController,
  findByIdXisController,
  createXisController,
  updateXisController,
  deleteXisController,
};
