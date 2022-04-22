const Xis = require('../models/Xis');
const findAllXisService = async () => {
  const allXis = await Xis.find();
  return allXis;
};

const findByIdXisService = async (idParametro) => {
  const oneXis = await Xis.findById(idParametro);
  return oneXis;
};

const createXisService = async (newXis) => {
  const createdXis = await Xis.create(newXis);
  return createdXis;
};

const updateXisService = async (idParametro, editXis) => {
  const updatedXis = await Xis.findByIdAndUpdate(idParametro, editXis);
  return updatedXis;
};

const deleteXisService = async (id) => {
  return await Xis.findByIdAndDelete(id);
};
module.exports = {
  findAllXisService,
  findByIdXisService,
  createXisService,
  updateXisService,
  deleteXisService,
};
