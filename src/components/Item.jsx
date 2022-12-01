import classNames from 'classnames';
import dayjs from 'dayjs';
import { StarIcon } from '@heroicons/react/20/solid';
import { StarIcon as StartOutlineIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../states/favoritesSlice';
import { isFavorite } from '../states/favoritesSelector';

export function Item(props) {
  const {
    data: {
      mission_name,
      rocket: { rocket_name, rocket_id },
      details,
      launch_date_local,
    },
    className,
  } = props;

  const isInFavoriteList = useSelector(isFavorite(mission_name));
  const dispatch = useDispatch();

  function toggleFavoriteHandle() {
    dispatch(toggleFavorite(props.data));
  }

  return (
    <div className={className}>
      <div className={classNames('flex sm:h-[286px] sm:flex-col rounded-lg shadow-sm overflow-hidden')}>
        <img className="sm:h-[150px] sm:w-full object-cover" src="https://via.placeholder.com/150" atl="" />
        <div className="flex flex-1 flex-col px-4 pt-3 pb-1 w-full">
          <h3 className="font-medium text-sm uppercase mb-1">
            <a href={`/rocket/${rocket_id}`}>{rocket_name}</a>
          </h3>
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
