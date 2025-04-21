import Home from "./home/Home";

export default async function HomePage() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/properties`
  ).then((res) => res.json());

  return <Home data={data} />;
}
