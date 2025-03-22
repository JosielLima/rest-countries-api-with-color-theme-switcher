import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchProps = {
    search: string;
    setSearch: (search: string) => void;
}

const Search = ({ search, setSearch }: SearchProps) => {
    return (
        <div className="md:w-1/3">
            <div className="relative">
                <input value={search} type="text" placeholder="Search" className="w-full rounded-lg border-gray-4 px-4 py-4 bg-white shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none " 
                    onChange={(e) => setSearch(e.target.value)}/>
                <span className="absolute inset-y-0 right-4 flex items-center"><MagnifyingGlassIcon className="size-4"/></span>
            </div>
        </div>
    )
}

export default Search