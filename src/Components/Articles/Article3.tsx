// Article3.tsx

import React from 'react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface Article3Props {
  moviesData: Movie[];
  isAuthenticated: boolean; // Добавляем пропс для аутентификации
}

const Article3: React.FC<Article3Props> = ({ moviesData, isAuthenticated }) => {
  const handleAddToWatchList = () => {
    if (isAuthenticated) {
      // Логика добавления в "Watch List"
      console.log("Добавлено в список просмотра!");
    } else {
      console.log("Пользователь не аутентифицирован.");
    }
  };

  return (
    <div>
      <h1>Article 3</h1>
      {/* Здесь вы можете добавить контент статьи и кнопку "Watch List" */}
      <button onClick={handleAddToWatchList}>Add to Watch List</button>
    </div>
  );
};

export default Article3;
