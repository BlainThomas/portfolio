import { handleScroll } from '../../utils/handleScroll';
import { useState } from 'react';

const navLinks = [
  { path: '#about-me', name: 'About Me' },
  { path: '#skills', name: 'Skills' },
  { path: '#projects', name: 'Projects' },
  { path: '#contact-me', name: 'Contact Me' },
];

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    toggleExpansion(false);
    handleScroll(e);
  };

  return (
    <nav className='fixed z-50 top-0 left-0 right-0 backdrop-blur-md border-b border-slate-300 shadow px-2 sm:px-4 py-2.5'>
      <div
        className={`container ${
          isExpanded ? 'max-h-80' : 'max-h-10'
        } z-50 transition-all md:max-h-16 flex flex-wrap items-center justify-between mx-auto`}
      >
        <a
          href='/'
          className='z-50 flex items-center bg-[#ffffffb1] rounded-full py-1 px-3 shadow'
        >
          <i className='mr-2 text-2xl text-blue-400 fa-solid fa-layer-group'></i>
          <span className='roboto text-slate-700 self-center text-xl md:text-2xl font-semibold whitespace-nowrap'>
            BlainWebDev
          </span>
        </a>
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          data-collapse-toggle='navbar-default'
          type='button'
          className='border border-slate-300  inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? 'translate-y-0' : '-translate-y-80'
          } z-0 md:translate-y-0 transition-all ease-in-out w-full md:block md:w-auto`}
        >
          <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium rounded-full'>
            {navLinks.map((link, index) => {
              const last = index === navLinks.length - 1;
              return (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={handleClose}
                    className={`${
                      last ? 'bg-blue-400 text-white md:hover:text-white': "text-slate-700 md:hover:text-blue-700"
                    } px-4 transition-all ease-in-out duration-300 hover:scale-110 block py-2 pl-3 pr-4`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
