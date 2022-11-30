import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function LaunchesPage() {
  const location = useLocation();

  return (
    <article>
      <header className="bg-[#F1F1F1]  w-full text-center py-4">
        <p className=" font-medium text-2xl px-6 ">SpaceX</p>
      </header>
      <div className="mt-5">
        <header className="pb-1.5">
          <h1 className="font-medium text-2xl px-6 ">Launches</h1>
        </header>
        <nav className="w-full">
          <ul className="flex list-none w-full border-b border-b-black gap-4">
            <li
              className={classNames('inline-flex text-sm uppercase justify-center py-4 min-w-[166px]', {
                'border-b-2 border-b-black': location.pathname === '/',
              })}
            >
              <Link to={`/`}>All</Link>
            </li>
            <li
              className={classNames('inline-flex text-sm uppercase justify-center py-4 min-w-[166px]', {
                'border-b-2 border-b-black': location.pathname === '/favorites',
              })}
            >
              <Link to={`/favorites`}>Favorites</Link>
            </li>
          </ul>
        </nav>
        <section className="w-full">
          <Outlet />
        </section>
      </div>
    </article>
  );
}
