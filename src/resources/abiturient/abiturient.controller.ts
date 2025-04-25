import { Request, Response } from 'express';
import * as AbiturientService from './abiturient.service';

export const getAllAbiturients = async (_req: Request, res: Response): Promise<void> => {
  const abiturients = await AbiturientService.getAllAbiturients();
  res.json(abiturients);
};

export const getAbiturientById = async (req: Request, res: Response): Promise<void> => {
  const { abiturientId } = req.params;
  if (!abiturientId) {
    res.status(400).send('Abiturient ID is required');
    return;
  }
  const abiturient = await AbiturientService.getAbiturientById(abiturientId);
  if (abiturient) {
    res.json(abiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

export const getAbiturientExams = async (req: Request, res: Response): Promise<void> => {
  const { abiturientId } = req.params;
  if (!abiturientId) {
    res.status(400).send('Abiturient ID is required');
    return;
  }
  const exams = await AbiturientService.getAbiturientExams(abiturientId);
  res.json(exams);
};

export const createAbiturient = async (req: Request, res: Response): Promise<void> => {
  const abiturient = await AbiturientService.createAbiturient(req.body);
  res.status(201).json(abiturient);
};

export const updateAbiturient = async (req: Request, res: Response): Promise<void> => {
  const { abiturientId } = req.params;
  if (!abiturientId) {
    res.status(400).send('Abiturient ID is required for update');
    return;
  }
  const abiturient = await AbiturientService.updateAbiturient(abiturientId, req.body);
  if (abiturient) {
    res.json(abiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

export const deleteAbiturient = async (req: Request, res: Response): Promise<void> => {
  const { abiturientId } = req.params;
  if (!abiturientId) {
    res.status(400).send('Abiturient ID is required for deletion');
    return;
  }
  await AbiturientService.deleteAbiturientWithExams(abiturientId);
  res.status(204).send();
};