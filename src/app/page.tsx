import Image from "next/image";
import Link from "next/link";

import { getMovies } from "@/api/movie";

export default async function Home() {
  const movies = await getMovies();

  return (
    <>
      <h1>Hello Next.js</h1>

      <div>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Image src={movie.backdrop_path} width={180} height={240} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
      <p>{JSON.stringify(movies)}</p>
    </>
  );
}
