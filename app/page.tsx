"use client";

import { useState, useEffect } from "react";
import { Card } from "./components";
import { countriesApi } from "./services";
import Link from "next/link";
import { Search } from "./components";

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
  subregion: string;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ search, setSearch ] = useState("");

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

  const sortedCountries = [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common, 'en-US'));
  const filteredCountries = sortedCountries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <Search search={search} setSearch={setSearch} count={filteredCountries.length} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCountries.map(({cca3, flags, name, capital, region, population  }, index) => (
          <Link key={cca3} href={`/country/${cca3}`}>
            <Card index={index} flag={flags.svg} name={name.common} capital={capital} region={region} population={population}  />
          </Link>
        ))}
      </div>
    </>
  );
}
