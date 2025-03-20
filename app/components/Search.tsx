import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchProps = {
    search: string;
    setSearch: (search: string) => void;
    count: number;
}

const Search = ({ search, setSearch, count }: SearchProps) => {
    return (
        <div className="w-1/3">
            <div className="relative">
                <input value={search} type="text" placeholder="Search" className="w-full rounded-lg border-gray-4 mb-4 px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none " 
                    onChange={(e) => setSearch(e.target.value)}/>
                <span className="absolute inset-y-0 right-4 flex items-center"><MagnifyingGlassIcon className="size-4"/></span>
            </div>
            <span className="text-sm text-gray-600">{count} results</span>
        </div>
    )
}

export default Search