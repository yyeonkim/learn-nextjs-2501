import { client } from "@/api/client";

export default async function Home() {
  const movies = await client("/movies", { method: "GET" });
  console.log("GET movies:", movies);

  return <h1>Hello Next.js</h1>;
}
