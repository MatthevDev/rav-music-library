import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SearchBar = () => {
    return (
        <div className="w-full px-12 flex justify-center items-center space-x-4">
            <Input
            type="text"
            placeholder="Search for songs / albums..."
            className="bg-zinc-700 border-zinc-900
            placeholder:text-gray-300" />
            <Button
            className="bg-zinc-800 hover:bg-zinc-600">
                Search <Search className="w-4 h-4 ml-2" />
            </Button>
        </div>
    )
}

export default SearchBar