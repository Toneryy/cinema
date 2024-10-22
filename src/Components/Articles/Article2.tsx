// Article2.tsx

import React from 'react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface Article2Props {
  moviesData: Movie[];
  isAuthenticated: boolean; // Добавляем пропс для аутентификации
}

const Article2: React.FC<Article2Props> = ({ moviesData, isAuthenticated }) => {
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
      <h1>Article 2</h1>
      {/* Здесь вы можете добавить контент статьи и кнопку "Watch List" */}
      <button onClick={handleAddToWatchList}>Add to Watch List</button>
    </div>
  );
};

export default Article2;
