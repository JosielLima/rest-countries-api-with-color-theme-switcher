"use client";
import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { countriesApi } from "../../services";


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

type Params = {
  id: string;
};

export default  function Country() {
  const params = useParams<Params>();
  const name = "Brazil";

  const [ country, setCountry ] = useState<Country | null>(null);
  const [ id, setId ] = useState<string | null>(null);

  useEffect(() => {
    if(params?.id && params.id !== id) {
      setId(params.id);
    }
  }, [params, id]);

  useEffect(() => {
    const fetchCountry = async () => {
      const [response, error] = await countriesApi.getCountry(id);
      if (error) {
        console.error(error);
      } else {
        setCountry(response);
      }
    };
    if(id) {
      fetchCountry();
    }
  }, [id]);

  console.log(country);
  return (
    <>
      <div className="mb-8">
        <Link href="/">
          <button className="bg-gray-200 :hover:bg-gray-300 font-semibold py-2 px-4 rounded">Back</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div className="w-full md:max-w-[400px]">
          <Image className="w-full h-full object-cover" src="/flag-placeholder.svg" alt={`${name} flag`} width={500} height={300} />
        </div>
        <div className="p-4 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-2">Brazil ({id})</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-1">
                  <span className="font-semibold">Capital</span>
                  <span>Brasília</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Region</span>
                  <span>South America</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Sub Region</span>
                  <span>211,787,693</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Population</span>
                  <span>211,787,693</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Top Level Domain</span>
                  <span>.br</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Currencies</span>
                  <span>BRL</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Languages</span>
                  <span>Brazilian Portuguese</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Bordering Countries</span>
                  <span>Argentina, Bolivia, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela</span>
                </div>
              </div>
          </div>
      </div>
    </>
  );
}