import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import {ROUTES} from "./Routes";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={ROUTES.ROOT} element={<BookList />} />
          <Route path={ROUTES.BOOKS} element={<BookList />} />
          <Route path={ROUTES.EDIT_BOOK} element={<Book />} />
          <Route path={ROUTES.ADD_BOOK} element={<Book />} />
          <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
