import { Suspense } from "react";

import MovieInfo from "@/components/MovieInfo";
import MovieVideos from "@/components/MovieVideos";
import styles from "@/styles/movie-detail.module.css";

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
