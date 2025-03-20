import Image from "next/image"
import { formatNumber } from "../utils";

type CardProps = {
    index: number;
    name: string;
    capital: string;
    region: string;
    population: number;
    flag: string;
}

const Card = ({ index, flag, name, capital, region, population}: CardProps) => {
    return (
      <div className="h-full bg-white rounded-lg shadow-lg">
          <div className="aspect-video w-full" >
              <Image className="w-full h-full object-cover" src={flag} alt={name} width={500} height={500} priority={index < 10}/>
          </div>
          <div className="p-4 text-sm text-gray-600">
              <h2 className="text-lg font-semibold mb-2">{name}</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Capital</span>
                  <span>{capital}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Region</span>
                  <span>{region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Population</span>
                  <span>{formatNumber(population)}</span>
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Card