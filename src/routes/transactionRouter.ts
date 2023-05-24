import { Router } from 'express';
import transactionController from '../controllers/transactionController';
import transactionsValidations from '../middleware/transactionsValidations';

const transactionsRouter = Router();

transactionsRouter.post(
  '/transactions', 
  transactionsValidations.transactionPriceValidation, 
  transactionsValidations.transactionPriceValidation,
  transactionController.create,
);

export default transactionsRouter;