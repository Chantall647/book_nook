export interface Book {
  id: string;
  title: string;
  genre: string;
  author: string;
  description: string;
}

export interface BookItemProps {
  book: Book;
  handleDeleteBook: (id: string) => void;
}

export interface NoBooksFoundProps {
  message: string;
}
