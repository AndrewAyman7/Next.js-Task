'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = ()=> {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto mt-20'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md  flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-amber-600 disabled:text-gray-400'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox ;