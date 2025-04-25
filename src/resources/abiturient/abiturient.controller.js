import * as AbiturientService from './abiturient.service.js';

export const getAllAbiturients = async (req, res) => {
  const abiturients = await AbiturientService.getAllAbiturients();
  res.json(abiturients);
};

export const getAbiturientById = async (req, res) => {
  const abiturient = await AbiturientService.getAbiturientById(req.params.abiturientId);
  if (abiturient) {
    res.json(abiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

export const getAbiturientExams = async (req, res) => {
  const exams = await AbiturientService.getAbiturientExams(req.params.abiturientId);
  res.json(exams);
};

export const createAbiturient = async (req, res) => {
  const abiturient = await AbiturientService.createAbiturient(req.body);
  res.status(201).json(abiturient);
};

export const updateAbiturient = async (req, res) => {
  const abiturient = await AbiturientService.updateAbiturient(
    req.params.abiturientId,
    req.body
  );
  if (abiturient) {
    res.json(abiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

export const deleteAbiturient = async (req, res) => {
  await AbiturientService.deleteAbiturient(req.params.abiturientId);
  res.status(204).send();
};