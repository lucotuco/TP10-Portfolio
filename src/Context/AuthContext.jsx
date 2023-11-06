import React, { createContext, useState } from 'react';

// Create the context
export const ProjectContext = createContext();

    const fakeProjects = [
        {
            id: 1,
            title: "Paisaje Sereno",
            description: "Una hermosa vista de un paisaje natural sereno.",
            imageUrl: "url-de-la-imagen-1.jpg",
            date: "2023-01-15",
            url: "https://www.ejemplo.com/proyecto1",
            favorito:false,
        },
        {
            id: 2,
            title: "Retrato en Blanco y Negro",
            description: "Un retrato artístico en blanco y negro de una persona.",
            imageUrl: "url-de-la-imagen-2.jpg",
            date: "2023-02-20",
            url: "https://www.ejemplo.com/proyecto2",
            favorito:false,
        },
        {
            id: 3,
            title: "Naturaleza Viva",
            description: "Fotografía de la belleza de la naturaleza en todo su esplendor.",
            imageUrl: "url-de-la-imagen-3.jpg",
            date: "2023-03-10",
            url: "https://www.ejemplo.com/proyecto3",
            favorito:false,
        },
        {
            id: 4,
            title: "Arte Abstracto",
            description: "Una expresión artística abstracta que desafía la imaginación.",
            imageUrl: "url-de-la-imagen-4.jpg",
            date: "2023-04-05",
            url: "https://www.ejemplo.com/proyecto4",
            favorito:false,
        },
        {
            id: 5,
            title: "Ciudad Nocturna",
            description: "Una visión de la ciudad de noche, llena de luces brillantes.",
            imageUrl: "url-de-la-imagen-5.jpg",
            date: "2023-05-18",
            url: "https://www.ejemplo.com/proyecto5",
            favorito:false,
        },
        {
            id: 6,
            title: "Aventura en el Bosque",
            description: "Una exploración en el corazón de un frondoso bosque.",
            imageUrl: "url-de-la-imagen-6.jpg",
            date: "2023-06-30",
            url: "https://www.ejemplo.com/proyecto6",
            favorito:false,
        }, {
            id: 7,
            title: "Mar Profundo",
            description: "Fotografía submarina de la vida marina en el océano.",
            imageUrl: "url-de-la-imagen-7.jpg",
            date: "2023-07-10",
            url: "https://www.ejemplo.com/proyecto7",
            favorito:false,
        },
        {
            id: 8,
            title: "Arquitectura Moderna",
            description: "Imágenes de edificios y estructuras modernas y vanguardistas.",
            imageUrl: "url-de-la-imagen-8.jpg",
            date: "2023-08-25",
            url: "https://www.ejemplo.com/proyecto8",
            favorito:false,
        },
        {
            id: 9,
            title: "Retratos en Movimiento",
            description: "Fotografías de retratos con efecto de movimiento.",
            imageUrl: "url-de-la-imagen-9.jpg",
            date: "2023-09-12",
            url: "https://www.ejemplo.com/proyecto9",
            favorito:false,
        },
        {
            id: 10,
            title: "Paisajes Invernales",
            description: "Vistas impresionantes de paisajes cubiertos de nieve y hielo.",
            imageUrl: "url-de-la-imagen-10.jpg",
            date: "2023-10-05",
            url: "https://www.ejemplo.com/proyecto10",
            favorito:false,
        },
];


// Create a provider component
export const ProjectProvider = ({ children }) => {
    // Set the initial state with the fakeProjects data
    const [projects, setProjects] = useState(fakeProjects);


    return (
        <ProjectContext.Provider value={{ projects }}>
            {children}
        </ProjectContext.Provider>
    );
};
