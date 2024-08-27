import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faPhp, faNeos, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faManatSign, faPooStorm, faShapes } from '@fortawesome/free-solid-svg-icons';

const languages = [
  {
    name: 'HTML',
    icon: faHtml5,
    experience: 'Tengo amplia experiencia en la creación de estructuras semánticas y optimizadas para SEO utilizando HTML5.',
    color: 'orange', // Color específico para HTML
  },
  {
    name: 'CSS',
    icon: faCss3Alt,
    experience: 'Manejo CSS3 con destreza, incluyendo el uso de preprocesadores como SASS y frameworks como Bootstrap y Tailwind CSS.',
    color: 'blue', // Color específico para CSS
  },
  {
    name: 'SQL',
    icon: faDatabase,
    experience: 'Domino JavaScript, tanto en su uso vanilla como con librerías y frameworks como React y Node.js.',
    color: 'yellow', // Color específico para JavaScript
  },
  {
    name: 'Next.js',
    icon: faNeos,
    experience: 'Tengo experiencia desarrollando interfaces de usuario dinámicas y responsivas con React, incluyendo el uso de hooks y context API.',
    color: 'blue', // Color específico para React
  },
  {
    name: 'C#',
    icon: faCode,
    experience: 'He trabajado en el desarrollo de backend utilizando Node.js, creando APIs RESTful y manejando bases de datos NoSQL como MongoDB.',
    color: "green", // Color específico para Node.js
  },
  {
    name: 'Python',
    icon: faPython,
    experience: 'Utilizo Python para el desarrollo de scripts automatizados y análisis de datos, además de trabajar con frameworks como Django y Flask.',
    color: 'yellow', // Color específico para Python
  },
  {
    name: 'PostMan',
    icon: faShapes,
    experience: 'Utilizo Python para el desarrollo de scripts automatizados y análisis de datos, además de trabajar con frameworks como Django y Flask.',
    color: 'yellow', // Color específico para Python
  },
  {
    name: 'PHP',
    icon: faPhp,
    experience: 'He desarrollado aplicaciones web con PHP, incluyendo el uso de frameworks como Laravel y Slim.',
    color: 'purple', // Color específico para PHP
  },
];

const LanguageExperience = () => {
  return (
    <div id='habilidades' className='my-10'>
        <h2 className="text-center mb-5 text-3xl font-semibold text-orange-400 ">Habiliades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto sm:mx-4 md:mx-12 lg:mx-24">
            {languages.map((language, index) => (
            <div key={index} className="flex items-start">
                <FontAwesomeIcon style={{ width: '40px', height: '40px' }} icon={language.icon} size="10x" className={`text-${language.color}-600 mr-4`} />
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-50">{language.name}</h3>
                    <p className="text-gray-400">{language.experience}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default LanguageExperience;