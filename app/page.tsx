"use client";

import { useState, useEffect } from "react";
import { Card, Header, Footer } from "./components";

type Country = {
  cca3: string;
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  capital: string;
  region: string;
  population: number;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=cca3,flags,name,capital,region,population");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map(({cca3, flags, name, capital, region, population  }, index) => (
          <Card key={cca3} index={index} flag={flags.svg} name={name.common} capital={capital} region={region} population={population}  />
        ))}
      </main>
      <Footer />
    </>
  );
}
