// server/routes/animeRoutes.js
import express from 'express';
import { getPopularAnime, getAnimeByPage, searchAnime, getEpisodesByTitle } from '../controllers/animeController.js';

const router = express.Router();

router.get('/popular', getPopularAnime);
router.get('/new', getAnimeByPage);
router.get('/search', searchAnime);
router.get('/episodes', getEpisodesByTitle);

export default router;