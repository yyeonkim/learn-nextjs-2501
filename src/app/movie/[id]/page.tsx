import type { Metadata } from "next";
import { Suspense } from "react";

import { getMovieDetail } from "@/api/movie";
import MovieInfo from "@/components/MovieInfo";
import MovieVideos from "@/components/MovieVideos";
import styles from "@/styles/movie-detail.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  const movie = await getMovieDetail(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <div className={styles.content}>
      <Suspense fallback={<p>Loading movie info...</p>}>
        <MovieInfo movieId={id} />
      </Suspense>
      <Suspense fallback={<p>Loading movie videos...</p>}>
        <MovieVideos movieId={id} />
      </Suspense>
    </div>
  );
}
