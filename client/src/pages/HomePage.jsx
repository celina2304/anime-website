import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingAnime, getAnimeByKeyword, clearSearchResults } from '../redux/animeSlice'
import SearchBar from '../components/SearchBar'
import AnimeCard from '../components/AnimeCard'

const HomePage = () => {
  const dispatch = useDispatch()
  const { trending, searchResults, loading, error } = useSelector((state) => state.anime)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    dispatch(getTrendingAnime())
  }, [dispatch])

  const handleSearch = (keyword) => {
    if (keyword.trim() === '') {
      dispatch(clearSearchResults())
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    dispatch(getAnimeByKeyword(keyword))
  }

  const displayedAnime = isSearching ? searchResults : trending

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Anime</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center my-6">Error: {error}</div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            {isSearching ? 'Search Results' : 'Trending Anime'}
          </h2>

          {displayedAnime.length === 0 ? (
            <p className="text-center text-gray-400 my-8">
              {isSearching ? 'No results found. Try a different search term.' : 'No trending anime available right now.'}
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {displayedAnime.map((anime) => (
                <AnimeCard key={anime.title} anime={anime} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default HomePage