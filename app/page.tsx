"use client";

import { useState, useEffect } from "react";
import { Card } from "./components";
import { countriesApi } from "./services";
import Link from "next/link";

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
      const [response, error] = await countriesApi.getAll();
      if (error) {
        setError(error);
      } else {
        setCountries(response);
      }
      setLoading(false);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map(({cca3, flags, name, capital, region, population  }, index) => (
          <Link key={cca3} href={`/country/${cca3}`}>
            <Card index={index} flag={flags.svg} name={name.common} capital={capital} region={region} population={population}  />
          </Link>
        ))}
      </div>
    </>
  );
}
