
// AnimeCard.jsx
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setCurrentAnime } from '../redux/animeSlice';

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = anime.embed_url.split("/")[4];
  const anime_title = url.split("-episode-")[0];
  return (
    <div onClick={() => {
      dispatch(setCurrentAnime(anime))
      navigate(`/anime/${anime_title}?episode=1`)
    }} className="bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative pb-[140%]">
        <img
          src={anime.thumbnail_url || '/placeholder-anime.jpg'}
          alt={anime.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-blue-400 transition duration-300">
          {anime.title}
        </h3>
        {/* <p className="text-gray-400 text-sm mt-1 line-clamp-1">{anime.title_jp}</p> */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">Episodes: {anime.episode}</span>
          {/* <span className="text-xs px-2 py-1 bg-blue-600 rounded-full">{anime.rating}</span> */}
        </div>
      </div>
    </div>
  )
}

export default AnimeCard
