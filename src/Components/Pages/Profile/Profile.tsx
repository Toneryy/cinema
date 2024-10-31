// Profile.tsx
import React, { useEffect, useState } from "react";
import s from "../../../styles/Pages/Proflie/profile.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
}

interface ProfileProps {
  moviesData: Movie[];
}

interface User {
  email: string;
  watchlist: number[];
}

const Profile: React.FC<ProfileProps> = ({ moviesData }) => {
  const [user, setUser] = useState<User | null>(null);
  // Change this to store movie objects instead of strings
  const [watchlistTitles, setWatchlistTitles] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки профиля");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.user);
        const titles = data.user.watchlist.map((movieId: number) => {
          const movie = moviesData.find((m) => m.id === movieId);
          return movie ? movie : { id: movieId, title: "Неизвестный фильм" }; // Return full object
        });
        setWatchlistTitles(titles);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [moviesData]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Вы вышли из аккаунта");
  };

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
          throw new Error("Ошибка удаления");
        }
        // Фильтруем удаленный фильм по его id
        setWatchlistTitles((prevTitles) =>
          prevTitles.filter((movie) => movie.id !== movieId)
        );
      })
      .catch((error) => console.error("Ошибка:", error.message));
  };

  return (
    <div className={s.profile}>
      <div className={s.profileHeader}>
        <span className={s.welcome}>Добро пожаловать, {user?.email}!</span>
        <button className={s.logoutButton} onClick={handleLogout}>
          Выйти
        </button>
      </div>
      <h2 className={s.watchlistHeader}>Ваш список наблюдения:</h2>
      {watchlistTitles.length > 0 ? (
        <ul className={s.watchlist}>
          {watchlistTitles.map(
            (
              movie // Map through movie objects
            ) => (
              <li key={movie.id} className={s.watchlistItem}>
                {movie.title}
                <button
                  className={s.removeButton}
                  onClick={() => removeFromWatchlist(movie.id)} // Use the correct function
                >
                  Удалить
                </button>
              </li>
            )
          )}
        </ul>
      ) : (
        <p className={s.emptyMessage}>Ваш список наблюдения пуст.</p>
      )}
    </div>
  );
};

export default Profile;
