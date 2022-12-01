import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useGetLaunchesQuery } from '../services/launches';
import ItemList from '../components/ItemList';
import { useDebounce } from '../hooks/useDebounce';

export function Launches() {
  const [searchByMission, setSearchByMission] = useState('');
  const { data, isLoading, error, refetch } = useGetLaunchesQuery(searchByMission);
  const debounceSearchQuery = useDebounce(refetch);

  if (isLoading) return <p className="content py-6">Loading...</p>;
  if (error) return <p className="content py-6">Oops..</p>;

  const onSearchByMissionHandle = (event) => {
    setSearchByMission(event.target.value);
    debounceSearchQuery.onChange(event.target.value);
  };

  return (
    <section className="w-full content">
      <header className="p-4 flex sm:flex-row-reverse flex-wrap items-center justify-between">
        <div className="relative mt-1 rounded-md shadow-sm  w-full sm:max-w-[413px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            value={searchByMission}
            onChange={onSearchByMissionHandle}
            className="block w-full rounded-md border-gray-300 py-2.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search all launches"
          />
        </div>
        <p className="text-sm mt-3 sm:mt-0">Total ({data.length})</p>
      </header>
      <ItemList source={data} />
    </section>
  );
}
