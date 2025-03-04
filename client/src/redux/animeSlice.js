import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTrending, searchAnime, fetchEpisodes } from '../services/api'

export const getTrendingAnime = createAsyncThunk(
  'anime/getTrending',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTrending()
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


export const getAnimeByKeyword = createAsyncThunk(
  'anime/getAnimeByKeyword',
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await searchAnime(keyword)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getEpisodesList = createAsyncThunk(
  'anime/getEpisodesList',
  async (title, { rejectWithValue }) => {
    try {
      const response = await fetchEpisodes(title)
      const updatedData = response.map((episode) => {
        if (episode.episode === null) {
          // Extract the episode number from `embed_url`
          const match = episode.embed_url.match(/episode-(\d+)/);
          if (match) {
            return { ...episode, episode: Number(match[1]) };
          }
        }
        return { ...episode, episode: Number(episode.episode) };
      });

      // Sort episodes by episode number
      const sortedData = updatedData.sort((a, b) => a.episode - b.episode);
      return sortedData;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  trending: [],
  currentAnime: null,
  episodes: [],
  searchResults: [],
  currentEpisode: null,
  loading: false,
  error: null,
}

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setCurrentEpisode: (state, action) => {
      state.currentEpisode = action.payload
    },
    setCurrentAnime: (state, action) => {
      state.currentAnime = action.payload
    },
    clearSearchResults: (state) => {
      state.searchResults = []
    },
  },
  extraReducers: (builder) => {
    builder
      // Trending anime cases
      .addCase(getTrendingAnime.pending, (state) => {
        state.loading = true
      })
      .addCase(getTrendingAnime.fulfilled, (state, action) => {
        state.trending = action.payload
        state.loading = false
      })
      .addCase(getTrendingAnime.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Search anime cases
      .addCase(getAnimeByKeyword.pending, (state) => {
        state.loading = true
      })
      .addCase(getAnimeByKeyword.fulfilled, (state, action) => {
        state.searchResults = action.payload
        state.loading = false
      })
      .addCase(getAnimeByKeyword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Get episodes list cases
      .addCase(getEpisodesList.pending, (state) => {
        state.loading = true
      })
      .addCase(getEpisodesList.fulfilled, (state, action) => {
        state.episodes = action.payload
        state.loading = false
      })
      .addCase(getEpisodesList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { setCurrentEpisode, setCurrentAnime, clearSearchResults } = animeSlice.actions

export default animeSlice.reducer