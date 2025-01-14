import { getMovieDetail } from "@/api/movie";

interface Props {
  movieId: string;
}

async function MovieInfo({ movieId }: Props) {
  const movie = await getMovieDetail(movieId);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
