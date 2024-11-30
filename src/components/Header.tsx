import React from 'react'

const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <header className="bg-gray-800 p-4 text-white flex items-center justify-between">
        <h1 className="text-xl font-bold">Movie Listings</h1>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 rounded-md text-black"
        />
    </header>
  )
}

export default Header;