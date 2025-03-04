const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema(
  {
    anime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Anime',
      required: true,
    },
    number: {
      type: Number,
      required: [true, 'Episode number is required'],
    },
    title: {
      type: String,
      required: [true, 'Episode title is required'],
      trim: true,
    },
    duration: {
      type: String,
    },
    videoUrl: {
      type: String,
      required: [true, 'Video URL is required'],
    },
    thumbnail: {
      type: String,
    },
    releaseDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Compound index to ensure episode numbers are unique per anime
episodeSchema.index({ anime: 1, number: 1 }, { unique: true });

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;