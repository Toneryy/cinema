// Profile.tsx
import React, { useEffect, useState } from "react";
import s from "../../../styles/Pages/Profile/profile.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import WatchList from "./WatchList";

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
          throw new Error("Failed to load profile");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.user);
        const titles = data.user.watchlist.map((movieId: number) => {
          const movie = moviesData.find((m) => m.id === movieId);
          return movie ? movie : { id: movieId, title: "Unknown movie" };
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
    toast.success("Logged out successfully");
  };

  return (
    <div className={s.profile}>
      <ProfileHeader userEmail={user?.email} onLogout={handleLogout} />
      <WatchList watchlistTitles={watchlistTitles} setWatchlistTitles={setWatchlistTitles} />
    </div>
  );
};

export default Profile;
