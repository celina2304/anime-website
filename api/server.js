import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import connectDB from './config/db.js';
import animeRoutes from './routes/animeRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
// connectDB();

const app = express();

app.use(cors({ origin: "https://anime-website-mu-mocha.vercel.app/" }));

app.use(express.json());

app.use('/api/anime', animeRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
