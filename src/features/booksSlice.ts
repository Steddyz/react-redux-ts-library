import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

interface BookState {
  books: Book[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: "idle",
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios(
    "https://openlibrary.org/people/mekBot/books/want-to-read.json"
  );
  return response.data;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default booksSlice.reducer;
