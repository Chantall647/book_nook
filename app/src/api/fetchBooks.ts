import axios, {AxiosResponse} from "axios";
import {Book} from "../interfaces/Book";

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response: AxiosResponse<Book[]> = await axios.get(
      "http://localhost:3001/books"
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
