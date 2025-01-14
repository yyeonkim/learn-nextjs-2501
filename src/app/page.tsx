import { getMovies } from "@/api/movie";

export default async function Home() {
  const movies = await getMovies();

  return (
    <>
      <h1>Hello Next.js</h1>
      <p>{JSON.stringify(movies)}</p>
    </>
  );
}
