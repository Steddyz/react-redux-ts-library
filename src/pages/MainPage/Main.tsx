import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBooks } from "../../features/booksSlice";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading === "loading") return <div>Loading...</div>;
  if (loading === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Books You Want to Read:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.key}>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover of ${book.title}`}
              />
            )}
            <strong>{book.title}</strong> by{" "}
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
