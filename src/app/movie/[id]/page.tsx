import { getMovieDetail, getVideos } from "@/api/movie";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const [movie, videos] = await Promise.all([getMovieDetail(id), getVideos(id)]);

  return (
    <>
      <h1>Movie Detail</h1>
      <p>{movie.overview}</p>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.name}</li>
        ))}
      </ul>
    </>
  );
}
