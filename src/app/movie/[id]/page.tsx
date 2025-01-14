import { getMovieDetail } from "@/api/movie";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const movie = await getMovieDetail((await params).id);

  return (
    <>
      <h1>Movie Detail</h1>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
