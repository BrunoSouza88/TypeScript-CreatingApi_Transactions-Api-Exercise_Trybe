import { NextFunction, Request, Response } from 'express';

const transactionValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name, price, type, userId } = req.body;
  if (!name) { return res.status(500).json({ message: 'name is required' }); }
  if (!price) { return res.status(500).json({ message: 'price is required' }); }
  if (!type) { return res.status(500).json({ message: 'type is required' }); }
  if (!userId) { return res.status(500).json({ message: 'userId is required' }); }
  next();
};

const transactionPriceValidation = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (!Number.isInteger(price)) {
    return res.status(500).json({ message: 'Price need to be a integer' });
  }
  next();
};

export default { transactionValidation, transactionPriceValidation };