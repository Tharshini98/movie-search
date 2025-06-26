import {Link} from "react-router-dom";

function TopBar({search, setSearch, setType}){
    const handleSubmit = (e) => e.preventDefault();

    return(
<nav className="bg-black p-2 text-white">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-12 flex items-center justify-between gap-4">
            <div className="text-red-800 font-bold text-2xl">Binge</div>
            <div>
            <form onSubmit={handleSubmit} className="flex items-center gap-4 ">
                <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search Movies"
                className="px-3 py-1 rounded-md bg-white text-red-800 font-semibold"
                />

                 <button className="rounded-md bg-red-800 text-sm px-3 py-2 font-bold text-white">
                        Search
                    </button>

                </form>
                </div>
                <div className="w-full flex items-center justify-center">
                <select onChange={(e) => setType(e.target.value)} className="p-2 bg-white font-semibold text-red-800 rounded-md w-full md:w-1/4">
                    <option value="">All</option>
                    <option value="movie">Movies</option>
                    <option value="tv-shows">TV Shows</option>
                </select>
                </div>
                <div className="w-sm md:w-1/4 text-center rounded-md bg-red-800 text-md px-3 py-2 font-bold text-white">
                    <Link to="/my-list">
                    My List
                    </Link>
            </div>
        </div>
    </div>
</nav>
    )
}

export default TopBar;