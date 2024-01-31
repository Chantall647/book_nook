import axios, {AxiosResponse} from "axios";
import {v4 as uuidv4} from "uuid";

import {Book} from "../interfaces/Book";

export const addBook = async (book: Book): Promise<Book> => {
  try {
    const body = {
      ...book,
      id: uuidv4(),
    };
    const response: AxiosResponse<Book> = await axios.post(
      "http://localhost:3001/books",
      body
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
};
