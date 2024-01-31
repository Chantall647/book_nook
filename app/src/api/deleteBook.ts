import axios from "axios";

export const deleteBook = async (bookId: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3001/books/${bookId}`);
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
