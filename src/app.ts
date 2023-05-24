import express, { Request, Response } from 'express';
import transactionsRouter from './routes/transactionRouter';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use(transactionsRouter);

export default app;
