import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import styles from "@/styles/movie-card.module.css";
import { Movie } from "@/types";

interface Props {
  movie: Movie;
}

async function MovieCard({ movie }: Props) {
  return (
    <Link key={movie.id} className={styles.movieCard} href={`/movie/${movie.id}`} prefetch>
      <Image className={styles.movieImg} src={movie.poster_path} width={180} height={240} alt={movie.title} />
      <p>{movie.title}</p>
    </Link>
  );
}

export default memo(MovieCard);
