import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="fixed flex justify-center top-3 z-50 w-full h-15 bg-transparent bg-opacity-10">
      <div className="pt-1 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Sobre mí</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
            <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Proyectos</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
            <FontAwesomeIcon icon={faChartBar} className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Habilidades</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-400 dark:group-hover:text-blue-500">Contacto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

  