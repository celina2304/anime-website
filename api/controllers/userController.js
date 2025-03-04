import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({ username, email, password });
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: user.getSignedJwtToken(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: user.getSignedJwtToken(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};
/*

import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (await User.findOne({ email })) return res.status(400).json({ error: 'User already exists' });
    const user = await User.create({ username, email, password });
    res.status(201).json({ _id: user._id, username: user.username, email: user.email, token: user.generateAuthToken() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ _id: user._id, username: user.username, email: user.email, token: user.generateAuthToken() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};*/