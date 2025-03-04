const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema(
  {
    title_en: {
      type: String,
      required: [true, 'English title is required'],
      trim: true,
    },
    title_jp: {
      type: String,
      trim: true,
    },
    synopsis: {
      type: String,
      required: [true, 'Synopsis is required'],
    },
    image: {
      type: String,
    },
    year: {
      type: Number,
    },
    rating: {
      type: String,
    },
    genres: [{
      type: String,
    }],
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'upcoming'],
      default: 'ongoing',
    },
    totalEpisodes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Create text index for search functionality
animeSchema.index({ title_en: 'text', title_jp: 'text', synopsis: 'text' });

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;