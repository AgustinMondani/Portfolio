const Navbar = () => {
    return (
      <div className=" fixed flex justify-center top-0 z-50 w-full h-15 bg-transparent bg-opacity-10">
        <div className="pt-3 backdrop-filter backdrop-blur-lg">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">

            <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Home</span>
            </button>

            <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12ZM12 14C15.31 14 18 15.69 18 18V20H6V18C6 15.69 8.69 14 12 14Z" fill="currentColor" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Sobre mí</span>
            </button>

            <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path clipRule="evenodd" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Proyectos</span>
            </button>

            <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2C10.8954 2 10 2.89543 10 4V12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2ZM6 8C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16C7.10457 16 8 15.1046 8 14V10C8 8.89543 7.10457 8 6 8ZM18 8C16.8954 8 16 8.89543 16 10V14C16 15.1046 16.8954 16 18 16C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8ZM2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H2Z" fill="currentColor" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Habilidades</span>
            </button>

            <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM3 4H21V20H3V4ZM12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6ZM6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H6ZM6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17C19 16.4477 18.5523 16 18 16H6Z" fill="currentColor" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Contacto</span>
            </button>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  