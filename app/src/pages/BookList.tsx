import React from "react";
import useSWR, {mutate} from "swr";
import {Grid, List, ListItem} from "@mui/material";

import {fetchBooks} from "../api/fetchBooks";
import {deleteBook} from "../api/deleteBook";

import useAlert from "../hooks/Alert/useAlert";

import BookItem from "../components/BookItem";
import BookListSkeleton from "../components/BookListSkeleton";
import NoBooksFound from "../components/NoBooksFound";
import ScrollToTopButton from "../components/ScrollToTopButton";

const BookList: React.FC = () => {
  const {data: books, error, isLoading} = useSWR("/books", fetchBooks);

  const {showAlert} = useAlert();

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id);
      showAlert({
        type: "success",
        message: "Book deleted successfully.",
        isAlertOpen: true,
      });
      mutate("/books");
    } catch {
      showAlert({
        type: "error",
        message: "Something went wrong.",
        isAlertOpen: true,
      });
    }
  };

  if (isLoading) {
    return <BookListSkeleton />;
  }

  if (error) {
    return <NoBooksFound message={"Something went wrong. Please try again."} />;
  }

  if (!books?.length) {
    return <NoBooksFound message={"Your library is currently empty."} />;
  }

  return (
    <>
      <Grid container mt={2} justifyContent={"center"} mb={2}>
        <List>
          {books.map((book) => (
            <ListItem key={book.id}>
              <BookItem book={book} handleDeleteBook={handleDeleteBook} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <ScrollToTopButton />
    </>
  );
};

export default BookList;
