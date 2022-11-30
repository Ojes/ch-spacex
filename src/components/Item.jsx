import classNames from 'classnames';
import dayjs from 'dayjs';
import { StarIcon } from '@heroicons/react/20/solid';
import { StarIcon as StartOutlineIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../states/favoritesSlice';
import { isFavorite } from '../states/favoritesSelector';

export function Item({
  data: {
    rocket: { rocket_name },
    details,
    launch_date_local,
  },
  className,
}) {
  const isInFavoriteList = useSelector(isFavorite(rocket_name));
  const dispatch = useDispatch();

  function toggleFavoriteHandle() {
    dispatch(toggleFavorite(rocket_name));
  }

  return (
    <div className={className}>
      <div className={classNames('flex rounded-lg shadow-sm overflow-hidden')}>
        <img src="https://via.placeholder.com/150" atl="" />
        <div className="flex flex-col px-4 pt-3 pb-1 w-full">
          <h3 className="font-medium text-sm uppercase mb-1">{rocket_name}</h3>
          <p className="text-xs text-ellipsis overflow-hidden max-h-[50px]">{details}</p>
          <footer className="mt-auto flex justify-between w-full">
            <time className="text-xs text-[#979797]" dateTime={launch_date_local}>
              {dayjs(launch_date_local).format('MMMM DD, YYYY')}
            </time>
            <button aria-label="add or remove to favorite" onClick={toggleFavoriteHandle}>
              {isInFavoriteList ? <StarIcon className="h-5 w-5" /> : <StartOutlineIcon className="h-5 w-5" />}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
