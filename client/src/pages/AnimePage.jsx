import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodesList, setCurrentEpisode } from '../redux/animeSlice'
import EpisodeList from '../components/EpisodeList'
import VideoPlayer from '../components/VideoPlayer'

const AnimePage = () => {
  const navigate = useNavigate()
  const { episode } = useSearchParams()
  console.log("episode: ", episode)
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()
  const { currentAnime, episodes, currentEpisode, loading, error } = useSelector((state) => state.anime)

  useEffect(() => {
    if (currentAnime?.title) {
      dispatch(getEpisodesList(currentAnime.title))
    }
  }, [dispatch, currentAnime])

  const updateQueryParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.has('episode')) {
      const episode = newParams.get('episode');
      dispatch(setCurrentEpisode(episodes.find((e) => e.episode === Number(episode))));
    }
  }, [searchParams, episodes, dispatch]);
  useEffect(() => {
    // Set the first episode as current when episodes are loaded
    if (episodes.length > 0 && !episodes) {
      dispatch(setCurrentEpisode(episodes[0]))
    }
  }, [dispatch, episodes, currentEpisode, episode])

  const handleEpisodeSelect = (episode) => {
    dispatch(setCurrentEpisode(episode))
    updateQueryParam('episode', episode.episode);

    navigate(`?episode=${episode.episode}`, { replace: true })
  }

  if (loading) {
    return (
      <div className="flex justify-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 text-center my-6">Error: {error}</div>
  }

  if (!currentAnime) {
    return <div className="text-center my-6">Anime not found</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{currentAnime.title}</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <div>
            <h3 className="text-xl font-semibold mb-3">Episodes</h3>
            <EpisodeList
              episodes={episodes}
              currentEpisode={currentEpisode}
              onEpisodeSelect={handleEpisodeSelect}
            />
          </div>
        </div>

        <div className="lg:w-2/3">
          {currentEpisode ? (
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Episode {currentEpisode.episode}: {currentEpisode.title}
              </h3>
              <VideoPlayer episode={currentEpisode} />
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400">Select an episode to watch</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnimePage