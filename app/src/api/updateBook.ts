import axios, {AxiosResponse} from "axios";
import {Book} from "../interfaces/Book";

export const updateBook = async (book: Book): Promise<Book> => {
  try {
    const response: AxiosResponse<Book> = await axios.put(
      `http://localhost:3001/books/${book.id}`,
      book
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
