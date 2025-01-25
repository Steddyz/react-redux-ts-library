import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/MainPage/Main";

// https://openlibrary.org/developers/api
// https://openlibrary.org/search/authors.json?q=stephen%20king

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
