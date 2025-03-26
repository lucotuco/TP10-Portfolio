import React, { createContext, useState } from 'react';

// Create the context
export const ProjectContext = createContext();

    const fakeProjects = [
        {
            id: 1,
            title: "Paisaje Sereno",
            description: "Una hermosa vista de un paisaje natural sereno.",
            imageUrl: "https://img.freepik.com/vector-premium/paisaje-al-atardecer-al-aire-libre-rio-colinas_104785-152.jpg",
            date: "2023-01-15",
            url: "https://img.freepik.com/vector-premium/paisaje-al-atardecer-al-aire-libre-rio-colinas_104785-152.jpg",
            favorito:false,
        },
        {
            id: 2,
            title: "Retrato en Blanco y Negro",
            description: "Un retrato artístico en blanco y negro de una persona.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZNwkVeiQKXOOwBlhxTxULFuQlhLXWu56Cg&s",
            date: "2023-02-20",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZNwkVeiQKXOOwBlhxTxULFuQlhLXWu56Cg&s",
            favorito:false,
        },
        {
            id: 3,
            title: "Naturaleza Viva",
            description: "Fotografía de la belleza de la naturaleza en todo su esplendor.",
            imageUrl: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
            date: "2023-03-10",
            url: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
            favorito:false,
        },
        {
            id: 4,
            title: "Arte Abstracto",
            description: "Una expresión artística abstracta que desafía la imaginación.",
            imageUrl: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
            date: "2023-04-05",
            url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
            favorito:false,
        },
        {
            id: 5,
            title: "Ciudad Nocturna",
            description: "Una visión de la ciudad de noche, llena de luces brillantes.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNQuEjXJk78xNdAXVtV4vEuSqIc78KM82xA&s",
            date: "2023-05-18",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNQuEjXJk78xNdAXVtV4vEuSqIc78KM82xA&s",
            favorito:false,
        },
        {
            id: 6,
            title: "Aventura en el Bosque",
            description: "Una exploración en el corazón de un frondoso bosque.",
            imageUrl: "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg",
            date: "2023-06-30",
            url: "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg",
            favorito:false,
        }, {
            id: 7,
            title: "Mar Profundo",
            description: "Fotografía submarina de la vida marina en el océano.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNovGhQKzAPLSlU6SBXZ2sM55vVQmtkwgkfQ&s",
            date: "2023-07-10",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNovGhQKzAPLSlU6SBXZ2sM55vVQmtkwgkfQ&s",
            favorito:false,
        },
        {
            id: 8,
            title: "Arquitectura Moderna",
            description: "Imágenes de edificios y estructuras modernas y vanguardistas.",
            imageUrl: "https://img.freepik.com/foto-gratis/paisajes-naturales-li-campo-bambu-al-aire-libre_1417-1348.jpg",
            date: "2023-08-25",
            url: "https://img.freepik.com/foto-gratis/paisajes-naturales-li-campo-bambu-al-aire-libre_1417-1348.jpg",
            favorito:false,
        },
        {
            id: 9,
            title: "Retratos en Movimiento",
            description: "Fotografías de retratos con efecto de movimiento.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDH3HymdxxmZ9TPysX6d0LW6U6kDYec6biA&s",
            date: "2023-09-12",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDH3HymdxxmZ9TPysX6d0LW6U6kDYec6biA&s",
            favorito:false,
        },
        {
            id: 10,
            title: "Paisajes Invernales",
            description: "Vistas impresionantes de paisajes cubiertos de nieve y hielo.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK50IvlXozA-jQ8Mk7lIJMeFoSCBnTRxrNfQ&s",
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
