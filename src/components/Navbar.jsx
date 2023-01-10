import React from 'react'

function Navbar() {
  return (
    <nav className="px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        {/* TODO: Change Logo  */}
      <a href="#" class="flex items-center hover:bg-pink-400">
          <span class="self-center text-4xl font-bold whitespace-nowrap text-pink-400 hover:text-pink-100 p-3">Landtik</span>
          </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
                    <button className=" font-semibold text-pink-600/100 border-4 border-pink-500/100 text-xl rounded px-3 py-1">Daftar</button>
          </li>
          <li>
                    <button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2">Login</button>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar