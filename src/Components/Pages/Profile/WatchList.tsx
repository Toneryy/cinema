// WatchList.tsx
import React from "react";
import s from "../../../styles/Pages/Profile/watchList.module.scss";
import { toast } from "react-toastify";

interface Movie {
  id: number;
  title: string;
}

interface WatchListProps {
  watchlistTitles: Movie[];
  setWatchlistTitles: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const WatchList: React.FC<WatchListProps> = ({ watchlistTitles, setWatchlistTitles }) => {
  const removeFromWatchlist = (movieId: number) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/api/auth/watchlist/remove/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove movie from Watch List");
        }
        setWatchlistTitles((prevTitles) =>
          prevTitles.filter((movie) => movie.id !== movieId)
        );
        toast.success("Movie removed from Watch List");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error:", error.message);
      });
  };

  return (
    <div>
      <h2 className={s.watchlistHeader}>Your Watch List:</h2>
      {watchlistTitles.length > 0 ? (
        <ul className={s.watchlist}>
          {watchlistTitles.map((movie) => (
            <li key={movie.id} className={s.watchlistItem}>
              {movie.title}
              <button
                className={s.removeButton}
                onClick={() => removeFromWatchlist(movie.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.emptyMessage}>Your Watch List is empty.</p>
      )}
    </div>
  );
};

export default WatchList;
