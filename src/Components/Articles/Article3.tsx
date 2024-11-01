import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { Movie } from "../../Redux/types";
import { addToWatchList } from "../../Redux/slices/watchListSlice"; 

interface ArticleProps {
  moviesData: Movie[];
  isAuthenticated: boolean;
}

const Article3: React.FC<ArticleProps> = ({ moviesData, isAuthenticated }) => {
  const dispatch = useDispatch();

  const handleAddToWatchList = (movieId: number) => {
    if (isAuthenticated) {
      dispatch(addToWatchList(movieId)); 
    } else {
      alert("Пожалуйста, войдите в систему, чтобы добавить фильмы в свой список просмотра.");
    }
  };

  return (
    <div>
      {moviesData.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <button onClick={() => handleAddToWatchList(movie.id)}>Добавить в список просмотра</button>
        </div>
      ))}
    </div>
  );
};

export default Article3;
