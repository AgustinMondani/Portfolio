// instalar para los iconos// npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faAddressCard, faContactBook, faEnvelope, faGlassMartiniAlt, faGuitar, faHome, faMessage, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => {
  return (
    <div className="flex pb-3 flex-row justify-center items-center gap-12 mt-12">

        <a href="mailto:a.mondani@hotmail.com" style={{ width: '40px', height: '40px' }} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faEnvelope} size="10x" />
        </a>
      
        <a href="https://www.linkedin.com/in/agustin-mondani-045079233/" style={{ width: '40px', height: '40px' }} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FontAwesomeIcon icon={faLinkedin} size="10x" />
        </a>

        <a href="https://wa.me/+5491122777035" style={{ width: '40px', height: '40px' }} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
  <         FontAwesomeIcon icon={faWhatsapp} size="10x" />
        </a>

        <a href="https://github.com/AgustinMondani" style={{ width: '40px', height: '40px' }} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-gray-800">
            <FontAwesomeIcon icon={faGithub} size="10x" />
        </a>
    </div>
  );
};

export default SocialLinks;