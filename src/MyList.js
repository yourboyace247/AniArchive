export default function MyList({ userList, removeFromUserList }) {
    if (userList.length === 0) {
    return (
      <div className="empty-list">
        <p style={{ "text-align": "center" }}>Your anime list is empty!</p>
        <p style={{ "text-align": "center" }}>Add some anime from the browse page.</p>
      </div>
    );
  }

    return (
    <div className="my-list-container">
      <h2>My Anime List ({userList.length})</h2>
      
      <div className="my-list-grid">
        {userList.map(anime => (
          <div key={anime.mal_id} className="my-list-card">
            <img 
              src={anime.images?.jpg?.image_url || '/placeholder.jpg'} 
              alt={anime.title} 
            />
            <h3>{anime.title}</h3>
            <button className="remove-btn" onClick={() => removeFromUserList(anime.mal_id)}>
              ⛔
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}