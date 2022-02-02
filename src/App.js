import { useEffect } from "react";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import { MovieContextProvider } from "./store/MovieContext";
import { getMoviesBySearch } from "./utils/api";
import "./App.css";

function App() {
  useEffect(() => {
    getMoviesBySearch("avengers").then((data) => {
      console.log("movies data", data);
    });
  });
  return (
    <div className="app">
      <MovieContextProvider>
        <Navbar />
        <Form />
        <Grid />
      </MovieContextProvider>
    </div>
  );
}

export default App;
