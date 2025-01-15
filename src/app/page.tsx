import { getMovies } from "@/api/movie";
import MovieCard from "@/components/MovieCard";
import styles from "@/styles/home.module.css";

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
