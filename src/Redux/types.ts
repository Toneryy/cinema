// types.ts
export interface Article {
    id: number;
    title: string;
    text: string; // Required property
    image: string; // Required property
    link: string; // Required property
  }
  
  export interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    image: string; // Required property
  }
  