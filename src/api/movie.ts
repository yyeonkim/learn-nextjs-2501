import { Movie, Video } from "@/types";
import { client } from "./client";

async function getMovies() {
  const movies = await client<Movie[]>("/movies", { method: "GET" });
  console.log("GET movies:", movies);

  return movies;
}

async function getMovieDetail(id: string) {
  const movie = await client<Movie>(`/movies/${id}`, { method: "GET" });
  console.log("GET movie detail:", movie);

  return movie;
}

async function getVideos(id: string) {
  const videos = await client<Video[]>(`/movies/${id}/videos`, { method: "GET" });
  console.log("GET movie videos:", videos);

  return videos;
}

export { getMovieDetail, getMovies, getVideos };
