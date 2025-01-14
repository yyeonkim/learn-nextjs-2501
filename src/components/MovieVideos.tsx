import { getVideos } from "@/api/movie";

interface Props {
  movieId: string;
}

async function MovieVideos({ movieId }: Props) {
  const videos = await getVideos(movieId);

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>{video.name}</li>
      ))}
    </ul>
  );
}

export default MovieVideos;
