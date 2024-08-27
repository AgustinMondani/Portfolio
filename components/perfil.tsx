import Image from "next/image";

const Perfil = () => {
    return (
        <div id="perfil" className="flex flex-col md:flex-row my-20 pt-36 mx-auto sm:mx-4 md:mx-12 lg:mx-24 xl:mx-56 bg-transparent shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center md:justify-start items-center px-6 py-4">
                <div className="h-40 w-40 z-30 rounded-full overflow-hidden">
                    <img 
                        src="https://media.licdn.com/dms/image/v2/D4D35AQF1slLF_2MPxw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723496740897?e=1725058800&v=beta&t=w8V6Ww1X94b3OGS5Ckn0yGp1eCyJz_p5lZe-Mj-G0f8" width="800" height="600" alt="Foto Agustín Mondani" className="object-cover"/>
                </div>
            </div>
            <div className="flex-1 px-6 py-4">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-orange-500">Agustín Mondani</h2>
                    <p className="text-orange-200">Técnico en programación</p>
                </div>
                <p className="text-gray-300">
                    Soy una persona proactiva y altamente motivada, con una sólida base en múltiples lenguajes de programación. Me destaco por mi capacidad para aprender rápidamente y adaptarme a nuevas tecnologías y entornos de trabajo. Mi flexibilidad y facilidad para enfrentar desafíos me permiten encontrar soluciones eficientes en situaciones cambiantes.
                    <br /><br />
                    Poseo excelentes habilidades para el trabajo en equipo, fomentando la colaboración y el intercambio de ideas. Me considero un líder natural, capaz de guiar proyectos y motivar a mis compañeros hacia el logro de objetivos comunes. Mi enfoque está siempre en la mejora continua, tanto a nivel personal como dentro del equipo, buscando siempre superar las expectativas.
                    <br /><br />
                    Con una visión clara y una actitud orientada a resultados, estoy comprometido a contribuir con mi conocimiento y experiencia en cualquier proyecto que emprenda, manteniendo siempre una actitud positiva y abierta a nuevas oportunidades de aprendizaje.
                </p>
            </div>
        </div>
    );
}

export default Perfil;
