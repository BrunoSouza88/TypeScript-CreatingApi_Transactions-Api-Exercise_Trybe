import { Request, Response } from 'express';
import transactionsService from '../services/transactionsService';

const create = async (req: Request, res: Response) => {
  const { name, type, price, userId } = req.body;
  const transaction = await transactionsService.create({ name, type, price, userId });
  res.status(201).json(transaction);
};

export default {
  create,
};
