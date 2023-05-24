import TransactionModel, { TransactionInputtableFields } from '../database/models/transactionModel';

const create = async (transaction: TransactionInputtableFields) => {
  const newTransaction = await TransactionModel.create(transaction);
  return newTransaction.dataValues;
};

export default {
  create,
};
