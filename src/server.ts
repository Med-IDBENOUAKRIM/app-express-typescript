import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';

import { PORT, URI } from './utils/envirenoment';
import connectToDb from './utils/connectDB';
import userRouter from './routes/authRoutes';

const app = express();

// helmet
app.use(helmet());

// cors
app.use(cors());

// morgan
app.use(morgan('dev'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to data base
connectToDb(URI!);

app.use('/api/v1/auth', userRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
