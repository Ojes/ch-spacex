import { StarIcon } from '@heroicons/react/20/solid';

export function Item() {
  return (
    <div className="flex rounded-lg shadow-sm overflow-hidden">
      <img src="https://via.placeholder.com/150" atl="" />
      <div className="flex flex-col px-4 pt-3 pb-1 w-full">
        <h3 className="font-medium text-sm uppercase mb-1">Falcon 9</h3>
        <p className="text-xs">First orbital class rocket capable of height</p>
        <footer className="mt-auto flex justify-between w-full">
          <time className="text-xs text-[#979797]" dateTime="">
            March 10, 2021,
          </time>
          <StarIcon className="h-5 w-5" />
        </footer>
      </div>
    </div>
  );
}
