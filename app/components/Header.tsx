import { MoonIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <header className="py-8 px-16 mb-4 flex items-center justify-between bg-white shadow-sm">
        <h1 className="text-2xl font-extrabold" >Where in the world?</h1>
        <div className="flex items-center gap-2">
          <MoonIcon className="size-6" />
          Dark Mode
        </div>
    </header>
  )
}

export default Header