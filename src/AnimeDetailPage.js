import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AnimeDetailPage() {
    const { id } = useParams();

    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchAnimeDetails() {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAnimeDetails();
  }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!anime) return <div>Anime not found</div>;

    return (
        <div className="anime-info">
            <h1>{anime.title}</h1>
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            <p><strong>Synopsis:</strong> {anime.synopsis}</p>
            <p><strong>Episodes:</strong> {anime.episodes}</p>
            <p><strong>Score:</strong> {anime.score}</p>
            <p><strong>Genres:</strong> {anime.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Aired:</strong> {anime.aired.string}</p>
            <p><strong>Status:</strong> {anime.status}</p>
            <p><strong>Rating:</strong> {anime.rating}</p>
        </div>
    );
}