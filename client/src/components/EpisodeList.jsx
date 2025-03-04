import { useState } from "react";

const EpisodeList = ({ episodes, currentEpisode, onEpisodeSelect }) => {
    const episodesPerPage = 48; // 5 columns × 10 rows
    const [currentPage, setCurrentPage] = useState(1);


    // Calculate total pages
    const totalPages = Math.ceil(episodes.length / episodesPerPage);

    // Get episodes for the current page
    const startIndex = (currentPage - 1) * episodesPerPage;
    const endIndex = startIndex + episodesPerPage;
    const paginatedEpisodes = episodes.slice(startIndex, endIndex);

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden p-4">
            <div className="max-h-[600px] overflow-y-auto">
                {episodes.length === 0 ? (
                    <p className="text-center text-gray-400 p-4">No episodes available</p>
                ) : (
                    <>
                        {/* Episodes Grid (5 Columns × 10 Rows) */}
                        <ul className="grid grid-cols-6 gap-3">
                            {paginatedEpisodes.map((episode) => (
                                <li
                                    key={episode.episode}
                                    className={`border border-gray-700 rounded-md p-1 text-center cursor-pointer ${currentEpisode && currentEpisode.episode === episode.episode
                                        ? "bg-blue-900 bg-opacity-50"
                                        : "hover:bg-gray-700"
                                        }`}
                                    onClick={() => onEpisodeSelect(episode)}
                                >
                                    <span className="font-bold text-blue-500">{episode.episode}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-4 gap-4">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
                                        }`}
                                >
                                    Previous
                                </button>
                                <span className="text-white">Page {currentPage} of {totalPages}</span>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default EpisodeList;
