import dotenv from 'dotenv-safe';
dotenv.config();

export const PORT = process.env.PORT;
export const URI = process.env.URI__DB;
export const NUMBER_OF_CHARACHTER_IN_PASSWORD = process.env.NUMBER_OF_CHARACHTER_IN_PASSWORD;
