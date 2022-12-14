import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { StarIcon } from '@heroicons/react/20/solid';
import { StarIcon as StartOutlineIcon } from '@heroicons/react/24/outline';
import { useGetRocketQuery } from '../services/rockets';

export function DetailsPage() {
  const params = useParams();
  const { data, isLoading, error } = useGetRocketQuery(params.id);

  // TODO: Create Error Handler with loading
  if (isLoading) return <p className="content">Loading...</p>;
  if (error) return <p className="content">Oops..</p>;

  const { rocket_name, description, first_flight } = data;

  return (
    <article className="w-full">
      <header className="w-full relative">
        <img className="h-[360px] object-cover w-full" src="https://via.placeholder.com/150" atl="" />
        <div className="absolute bottom-3.5 z-10px px-5">
          <time className="text-xs text-[#979797]" dateTime={first_flight}>
            {dayjs(first_flight).format('MMMM DD, YYYY')}
          </time>
          <h1 className="uppercase font-medium text-2xl">{rocket_name}</h1>
          <p className="text-sm uppercase">First orbital class rocket capable of refight</p>
        </div>
      </header>
      <div className="flex pt-6 text-center justify-around content sm:bg-[#828282]">
        <div className="flex-1 px-4 border-r border-[#d9d9d9]">
          <p className="text-2xl">122</p>
          <p className="text-[10px] text-[#595959] uppercase">
            Total <br />
            launches
          </p>
        </div>
        <div className="flex-1 px-4 border-r border-[#d9d9d9]">
          <p className="text-2xl">82</p>
          <p className="text-[10px] text-[#595959] uppercase">
            Total <br />
            landings
          </p>
        </div>
        <div className="px-4 flex-1">
          <p className="text-2xl">64</p>
          <p className="text-[10px] text-[#595959] uppercase">
            Reflown
            <br />
            Rockets
          </p>
        </div>
      </div>
      <div className="pt-10 content sm:text-center">
        <h2 className="text-xs uppercase px-6  pb-1.5">About launched</h2>
        <p className="text-xs px-6">{description}</p>

        <h2 className="text-xs uppercase px-6 pt-10 pb-1.5">Overview</h2>
      </div>
      <div className="w-full">
        {/** SLIDER */}
        <img className="h-[163px] w-full object-cover" src="https://via.placeholder.com/150" alt="" />
        <div className="content">
          <h3 className="text-xs uppercase px-6 pt-5 pb-1.5">First stage</h3>
          <p className="text-xs px-6">
            Falcon 9???s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid
            oxygen and rocket-grade kerosene (RP-1) propellant.
          </p>
        </div>
      </div>

      <footer className="mt-10 flex flex-col w-full content pb-24">
        <p className="text-xs text-[#262626]">For information about our launch services, contact sales@spacex.com</p>
        <div className="flex flex-wrap gap-4 w-full">
          <button className="border py-2.5 px-3 mt-6 w-max rounded text-sm text-[#020202] uppercase border-[#BDBDBD]">
            Download user's guide
          </button>
          <button className="border py-2.5 px-3  mt-6 w-max rounded text-sm text-[#020202] uppercase border-[#BDBDBD]">
            Capabilities and services
          </button>
        </div>
      </footer>
    </article>
  );
}
