import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyList({ userList, removeFromUserList }) {
  const [activeTab, setActiveTab] = useState("all");
  const [myListSearch, setMyListSearch] = useState("");

    if (userList.length === 0) {
    return (
      <div className="empty-list">
        <p style={{ "text-align": "center" }}>Your anime list is empty!</p>
        <p style={{ "text-align": "center" }}>Add some anime from the browse page.</p>
      </div>
    );
  }

  const filteredList = userList.filter(anime => {
    const statusMatch = activeTab === "all" || anime.status === activeTab;
    const searchMatch = myListSearch === "" || 
      anime.title.toLowerCase().includes(myListSearch.toLowerCase());
    return statusMatch && searchMatch;
  });

    return (
    <div className="my-list-container">

      <input
      type="text"
      placeholder="Search anime in your list..."
      value={myListSearch}
      onChange={(e) => setMyListSearch(e.target.value)}
      className="my-list-search-input"
    />
      <h2>My Anime List ({userList.length})</h2>



      <select className="status-selector" value={activeTab} onChange={(e) => setActiveTab(e.target.value)}>
        <option value="all">All</option>
        <option value="watching">Watching</option>
        <option value="completed">Completed</option>
        <option value="planToWatch">Plan To Watch</option>
        <option value="dropped">Dropped</option>
      </select>
      
      <div className="my-list-grid">
        {filteredList.map(anime => (
          <div key={anime.mal_id} className="my-list-card">
            <img 
              src={anime.images?.jpg?.image_url || '/placeholder.jpg'} 
              alt={anime.title} 
            />
            <h3>{anime.title}</h3>
            <button className="remove-btn" onClick={() => removeFromUserList(anime.mal_id)}>
              ⛔
            </button>
            <Link to={`/anime/${anime.mal_id}`}>
                <button className="details-btn">📖</button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
