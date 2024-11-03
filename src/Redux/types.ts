// types.ts
export interface Article {
    id: number;
    title: string;
    text: string; // Required property
    image: string;
    link: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    image: string;
  }
  