const API_BASE_URL = 'https://animeapi.skin';

export const getPopularAnime = async (req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular anime' });
  }
};

export const getAnimeByPage = async (req, res) => {
  try {
    const { page } = req.query;
    const response = await fetch(`${API_BASE_URL}/new?page=${page}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime by page' });
  }
};

export const searchAnime = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await fetch(`${API_BASE_URL}/search?q=${q}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search anime' });
  }
};

export const getEpisodesByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const response = await fetch(`${API_BASE_URL}/episodes?title=${title}`);
    const data = await response.json();
    res.json(data);
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