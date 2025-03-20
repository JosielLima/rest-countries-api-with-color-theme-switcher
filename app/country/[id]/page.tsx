"use client";
import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { countriesApi } from "../../services";
import { formatNumber } from "../../utils";


type Country = {
  cca3: string;
  flags: {
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  capital: string;
  region: string;
  population: number;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld: string[];
  borders: string[];
};

type Params = {
  id: string;
};

export default  function Country() {
  const params = useParams<Params>();

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

  const { flags, name, capital, region, population, subregion, languages, currencies, tld, borders } = country ?? {};
  const { svg: flag } = flags ?? {};
  const { common: countryName, official: countryOfficialName } = name ?? {};
  const languagesName = Object.values(languages ?? {}).join(', ');

  const currencyName = Object.values(currencies ?? {}).map(currency => currency.name).join(', ');
  const currencySymbol = Object.values(currencies ?? {}).map(currency => currency.symbol).join(', ');
  const tldName = tld ?? [];
  const borderingCountries = borders ?? [];

  return (
    <>
      <div className="mb-8">
        <Link href="/">
          <button className="bg-gray-200 :hover:bg-gray-300 font-semibold py-2 px-4 rounded">Back</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div className="w-full md:max-w-[400px]">
          <Image className="rounded-lg object-cover max-h-80" src={flag || '/flag-placeholder.svg'} alt={`${countryName} flag`} width={500} height={300} priority/>
        </div>
        <div className="p-4 text-sm text-gray-600">
          <h2 className="text-lg font-semibold mb-2">{countryName} ({id})</h2>
          <div className="space-y-2">
          <div>
              <span className="font-semibold">Official Name</span> 
              <span>{" "}{countryOfficialName}</span>
            </div>
            <div>
              <span className="font-semibold">Capital</span> 
              <span>{" "}{capital}</span>
            </div>
            <div>
              <span className="font-semibold">Region</span>
              <span>{" "}{region}</span>
            </div>
            <div>
              <span className="font-semibold">Sub Region</span> 
              <span>{" "}{subregion}</span>
            </div>
            <div>
              <span className="font-semibold">Population</span> 
              <span>{" "} {formatNumber(population ?? 0)}</span>
            </div>
            <div>
              <span className="font-semibold">Top Level Domain</span> 
              <span>{" "} {tldName}</span>
            </div>
            <div>
              <span className="font-semibold">Currencies</span> 
              <span>{" "} {currencyName} ({currencySymbol})</span>
            </div>
            <div>
              <span className="font-semibold">Languages</span> 
              <span>{" "} {languagesName}</span>
            </div>
            <div>
              <span className="font-semibold">Bordering Countries</span> 
              <span className="flex flex-wrap gap-1">{borderingCountries.length > 0 ? borderingCountries.map(border => <Link key={border} href={`/country/${border}`}><button className="bg-gray-200 :hover:bg-gray-300 font-semibold py-2 px-4 rounded">{border}</button></Link>) : 'No bordering countries'}</span>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}