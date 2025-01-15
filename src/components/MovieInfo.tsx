import Image from "next/image";

import { getMovieDetail } from "@/api/movie";
import styles from "@/styles/movie-detail.module.css";

interface Props {
  movieId: string;
}

async function MovieInfo({ movieId }: Props) {
  const movie = await getMovieDetail(movieId);

  return (
    <div className={styles.movieInfo}>
      <h1>{movie.title}</h1>
      <div className={styles.backdropImg}>
        <Image fill src={movie.backdrop_path} alt={movie.title} />
      </div>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
