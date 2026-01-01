import { useState } from "react";

export default function Modal({ isOpen, onClose, anime, onSave }) {
    const [status, setStatus] = useState("planToWatch");
    const [rating, setRating] = useState(null);
    const [dateStarted, setDateStarted] = useState(null);
    const [dateFinished, setDateFinished] = useState(null);

    const handleSubmit = () => {
        onSave({
            status,
            rating,
            dateStarted,
            dateFinished,
        });
    };

    if(!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add {anime?.title} to your list</h2>

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="watching">Watching</option>
                    <option value="completed">Completed</option>
                    <option value="planToWatch">Plan to watch</option>
                    <option value="dropped">Dropped</option>
                </select>

                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1⭐</option>
                    <option value="2">2⭐</option>
                    <option value="3">3⭐</option>
                    <option value="4">4⭐</option>
                    <option value="5">5⭐</option>
                    <option value="6">6⭐</option>
                    <option value="7">7⭐</option>
                    <option value="8">8⭐</option>
                    <option value="9">9⭐</option>
                    <option value="10">10⭐</option>
                </select>

                <input 
                type="date" 
                value={dateStarted || ''}
                onChange={(e) => setDateStarted(e.target.value)}
                placeholder="Date started"
                />

                <input 
                type="date" 
                value={dateFinished || ''}
                onChange={(e) => setDateFinished(e.target.value)} 
                placeholder="Date finished (optional)"
                />

                <button className="save-btn" onClick={handleSubmit}>Save</button>
                <button className="cancel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}