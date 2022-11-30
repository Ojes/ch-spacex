export function Details() {
  return (
    <article className="w-full">
      <header className="w-full relative">
        <img className="h-[360px] object-cover w-full" src="https://via.placeholder.com/150" atl="" />
        <div className="absolute bottom-3.5 z-10px px-5">
          <time className="text-xs text-[#595959]" dateTime="">
            March 10, 2021
          </time>
          <h1 className="uppercase font-medium text-2xl">Falcon 9</h1>
          <p className="text-sm uppercase">First orbital class rocket capable of refight</p>
        </div>
      </header>
      <div className="flex  text-center justify-around p-6">
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
      <div className="pt-10">
        <h2 className="text-xs uppercase px-6  pb-1.5">About launched</h2>
        <p className="text-xs px-6">
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe
          transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn
          drives down the cost of space access.
        </p>

        <h2 className="text-xs uppercase px-6 pt-10 pb-1.5">Overview</h2>
        <img className="h-[163px] w-full object-cover" src="https://via.placeholder.com/150" alt="" />
        <div>
          {/** SLIDER */}
          <h3 className="text-xs uppercase px-6 pt-5 pb-1.5">First stage</h3>
          <p className="text-xs px-6">
            Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid
            oxygen and rocket-grade kerosene (RP-1) propellant.
          </p>
        </div>
      </div>
      <footer className="mt-10 flex flex-col w-full px-6">
        <p className="text-xs text-[#262626]">For information about our launch services, contact sales@spacex.com</p>
        <button className="border py-2.5 px-3 mt-6 w-max rounded text-sm text-[#020202] uppercase border-[#BDBDBD]">
          Download user's guide
        </button>
        <button className="border py-2.5 px-3  mt-6 w-max rounded text-sm text-[#020202] uppercase border-[#BDBDBD]">
          Capabilities and services
        </button>
      </footer>
    </article>
  );
}
