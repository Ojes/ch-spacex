import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import ItemList from '../components/ItemList';
import { useDebounce } from '../hooks/useDebounce';

export function Favorites() {
  const [search, setSearch] = useState('');
  const favoritesState = useSelector((state) => state?.favorites);
  const [favorites, setFavorite] = useState([]);
  const [filter, setFilter] = useState('');
  const debounceSearchQuery = useDebounce(filterList);

  function filterList(filter) {
    setFilter(filter);
  }

  const onSearchHandle = (event) => {
    setSearch(event.target.value);
    debounceSearchQuery.onChange(event.target.value);
  };

  useEffect(() => {
    const { _persist, ...rest } = favoritesState;
    let favs = Object.values(rest).filter((value) => !!value);
    if (filter) {
      favs = favs.filter(({ rocket: { rocket_name } }) => rocket_name.toLowerCase().includes(filter.toLowerCase()));
    }
    setFavorite(favs);
  }, [favoritesState, filter]);

  console.log(favorites);

  return (
    <section className="w-full px-6">
      <header className="p-4 flex sm:flex-reverse flex-wrap items-center">
        <div className="relative mt-1 rounded-md shadow-sm  w-full sm:max-w-[413px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={onSearchHandle}
            className="block w-full rounded-md border-gray-300 py-2.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search favorites"
          />
        </div>
        <p className="text-sm mt-3 sm:mt-0 sm:ml-auto">Total ({favorites.length})</p>
      </header>
      <ItemList source={favorites} />
    </section>
  );
}
