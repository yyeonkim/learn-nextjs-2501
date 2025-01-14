import { Suspense } from "react";

import MovieInfo from "@/components/MovieInfo";
import MovieVideos from "@/components/MovieVideos";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <>
      <Suspense fallback={<p>Loading movie info...</p>}>
        <MovieInfo movieId={id} />
      </Suspense>
      <Suspense fallback={<p>Loading movie videos...</p>}>
        <MovieVideos movieId={id} />
      </Suspense>
    </>
  );
}
