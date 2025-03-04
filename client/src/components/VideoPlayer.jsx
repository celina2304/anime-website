// VideoPlayer.jsx
const VideoPlayer = ({ episode }) => {
    if (!episode || !episode.embed_url) {
        return (
            <div className="bg-gray-800 rounded-lg p-8 text-center aspect-video">
                <p className="text-gray-400">Video not available</p>
            </div>
        )
    }

    return (
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
            {/* <iframe src="https://2anime.xyz/embed/one-piece-episode-1" width="100%" height="100%" frameborder="0" allowfullscreen></iframe> */}
            <iframe
                src={episode.embed_url}
                title={`Episode ${episode.number}: ${episode.title}`}
                className="w-full h-full"
                // allowFullScreen
                allow="autoplay; fullscreen"
            ></iframe>
        </div>
    )
}

export default VideoPlayer
