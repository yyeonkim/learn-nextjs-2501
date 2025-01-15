import { getVideos } from "@/api/movie";
import styles from "@/styles/movie-detail.module.css";

interface Props {
  movieId: string;
}

async function MovieVideos({ movieId }: Props) {
  const videos = await getVideos(movieId);

  return (
    <>
      <h2>Trailers</h2>
      <div className={styles.videoSlider}>
        <div>
          {videos.map((video) => (
            <iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} title={video.name}></iframe>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieVideos;
