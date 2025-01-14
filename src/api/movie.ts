import { Movie } from "@/types";
import { client } from "./client";

async function getMovies() {
  const movies = await client<Movie[]>("/movies", { method: "GET" });
  console.log("GET movies:", movies);

  return movies;
}

async function getMovieDetail(id: number | string) {
  const movie = await client<Movie>(`/movies/${id}`, { method: "GET" });
  console.log("GET movie detail:", movie);

  return movie;
}

export { getMovieDetail, getMovies };
