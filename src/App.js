import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useKey } from "./useKey";
import { useLocalStorageState } from "./useLocalStorageState";
import MyList from "./MyList";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [userList, setUserList] = useLocalStorageState([], 'savedAnimeList');

  function addToUserList(anime) {
    const alreadyExists = userList.some(item => item.mal_id === anime.mal_id);

    if (alreadyExists) {
      alert("Anime is already in your list!"); return;  
    }

    const animeToAdd = {...anime,
      userRating: null,
      status: 'Plan to Watch',
      added: new Date().toISOString()
    };

    setUserList([...userList, animeToAdd]);
}

  function removeFromUserList(animeId) {
    const updatedList = userList.filter(item => item.mal_id !== animeId);
    setUserList(updatedList);
  }

  function isAnimeInList(animeId) {
    const alreadyExists = userList.some(item => item.mal_id === animeId);
    return alreadyExists;
  }

useEffect(() => {
  const controller = new AbortController();

  async function fetchAnime() {
    try {
      setLoading(true);
      const endpoint = searchQuery
      ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=20`
      : 'https://api.jikan.moe/v4/top/anime';

      const response = await axios.get(endpoint, {
        signal: controller.signal
      });

      setAnimeList(response.data.data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Error", error);
      }
    } finally {
      setLoading(false);
    }
  }

  const timer =setTimeout(fetchAnime, 500);

  return () => {
    controller.abort();
    clearTimeout(timer);
  };
}, [searchQuery]);

  console.log("Anime list:", animeList);

  return (
    <div className="container">
      <h1>🌸AniArchive</h1>
      <NavBar userList={userList}>
        <Search query={searchQuery} setQuery={setSearchQuery} />
      </NavBar>
      <Routes>
        <Route path="/" element={
        <div>

          <h1>Top Rated Anime</h1>
      
      {isLoading ? (
      <div className="loading-spinner"></div>
      ) : (
        <div className="anime-grid">
        {animeList.map(anime => (
          <div key={anime.mal_id} className="anime-card">
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <h3>{anime.title}</h3>
              <p>⭐ {anime.score || 'N/A'}</p>
              {isAnimeInList(anime.mal_id) ? (
              <button className="remove-btn" onClick={() => removeFromUserList(anime.mal_id)}>⛔</button>
              ) : (
              <button className="add-btn" onClick={() => addToUserList(anime)}>➕</button>
              )}
            </div>
        ))}
      </div>
    )}
    </div>
} />
    <Route path="/mylist" element={
            <MyList 
              userList={userList}
              removeFromUserList={removeFromUserList}
            />
          } />
        </Routes>
      </div>
    );
}

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    
    inputEl.current.focus();
  });

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search anime..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}