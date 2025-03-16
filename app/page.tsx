import { Card, Header, Footer } from "./components";

const countries = [
  {
    id: "1",
    country: "Brasil",
    capital: "Brasília",
    region: "America do Sul",
    population: "211.897.000",
  },
  {
    id: "2",
    country: "EUA",
    capital: "Washington",
    region: "America do Norte",
    population: "391.900.000",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <Card key={country.id} id={country.id} country={country.country} capital={country.capital} region={country.region} population={country.population} />
        ))}
      </main>
      <Footer />
    </>
  );
}
