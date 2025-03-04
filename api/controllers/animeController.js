// import Anime from '../models/Anime.js';
import axios from 'axios';

const API_BASE_URL = 'https://animeapi.skin'
export const getPopularAnime = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trending`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular anime' });
  }
};

export const getAnimeByPage = async (req, res) => {
  try {
    const { page } = req.query;
    const response = await axios.get(`${API_BASE_URL}/new?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime by page' });
  }
};

export const searchAnime = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`${API_BASE_URL}/search?q=${q}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search anime' });
  }
};

export const getEpisodesByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const response = await axios.get(`${API_BASE_URL}/episodes?title=${title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch episodes' });
  }
};
/*

import axios from 'axios';

export const getPopularAnime = async (req, res) => {
  try { res.json((await axios.get('https://abc.skin/trending')).data); } 
  catch (error) { res.status(500).json({ error: 'Failed to fetch popular anime' }); }
};

export const getAnimeByPage = async (req, res) => {
  try { res.json((await axios.get(`https://abc.skin/new?page=${req.query.page}`)).data); } 
  catch (error) { res.status(500).json({ error: 'Failed to fetch anime by page' }); }
};

export const searchAnime = async (req, res) => {
  try { res.json((await axios.get(`https://abc.skin/search?q=${req.query.q}`)).data); } 
  catch (error) { res.status(500).json({ error: 'Failed to search anime' }); }
};

export const getEpisodesByTitle = async (req, res) => {
  try { res.json((await axios.get(`https://abc.skin/episodes?title=${req.query.title}`)).data); } 
  catch (error) { res.status(500).json({ error: 'Failed to fetch episodes' }); }
};*/