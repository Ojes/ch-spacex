import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="w-full">
      <header className="bg-[#F1F1F1]  w-full text-center py-4">
        <p className=" font-medium text-2xl px-6 ">SpaceX</p>
      </header>
      <main className="pt-5">
        <article>
          <header className="pb-1.5">
            <h1 className="font-medium text-2xl px-6 ">Launches</h1>
          </header>
          <nav className="w-full">
            <ul className="flex list-none w-full border-b border-b-black gap-4">
              <li className="inline-flex text-sm uppercase justify-center py-4 selected min-w-[166px] border-b-2 border-b-black">
                All
              </li>
              <li className="inline-flex text-sm uppercase justify-center py-4 min-w-[166px]">Favorites</li>
            </ul>
          </nav>
          <section className="w-full px-6">
            <header className="p-4 flex sm:flex-reverse flex-wrap items-center">
              <div className="relative mt-1 rounded-md shadow-sm  w-full sm:max-w-[413px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  className="block w-full rounded-md border-gray-300 py-2.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search all launches"
                />
              </div>
              <p className="text-sm mt-3 sm:mt-0 sm:ml-auto">Total (30)</p>
            </header>
            <ItemList />
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
