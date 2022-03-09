import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <>
      <nav
        className={
          'block fixed top-0 z-10 w-full sm:w-[500px] ' +
          (isScrolled ? 'bg-white' : 'bg-transparent')
        }
      >
        <div className="flex justify-around items-center relative z-10 py-3 px-5 gap-3">
          <div className="basis-10/12">
            <button
              className="flex sm:flex items-center w-full text-left space-x-3 px-4 h-10 
            bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none 
              focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="flex-none text-slate-300 dark:text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
              <span className="flex-auto">Cari Produk...</span>
            </button>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                'h-6 w-6 mx-1  ' +
                (isScrolled ? 'text-gray-900' : 'text-white ')
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                'h-6 w-6 mx-1 ' + (isScrolled ? 'text-gray-900' : 'text-white ')
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="mb-16">
        <div
          id="circle"
          className="w-full max-w-[500px] h-[80vw] max-h-[250px] bg-yellow-500 rounded-[120vw/30vw] absolute top-[-100px] z-0"
        >
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default Header;
