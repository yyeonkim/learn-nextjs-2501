import { client } from "./client";

async function getMovies() {
  const movies = await client("/movies", { method: "GET" });
  console.log("GET movies:", movies);

  return movies;
}

export { getMovies };
