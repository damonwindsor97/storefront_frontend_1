import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  

  return (
    <nav className="bg-main fixed w-full z-20 top-0 start-0 md:backdrop-blur font-inter">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <img
            src="https://2015.pycon-au.org/img/logos/default-logo.png"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-teal-500">
            Store
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="transition-colors duration-300 ease-in-out text-black bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Shop Now
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 text-white md:text-lg bg-blue-700 md:rounded-lg md:bg-transparent md:text-neutral-400 md:hover:bg-neutral-900 active:bg-neutral-900"
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-900 md:text-lg rounded hover:bg-gray-100 md:rounded-lg  md:hover:bg-neutral-900 md:text-neutral-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="https://discord.gg"
                className="block py-2 px-3 text-gray-900 md:text-lg rounded hover:bg-gray-100 md:rounded-lg  md:hover:bg-neutral-900 md:text-neutral-400"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header