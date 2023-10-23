import { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart} from 'react-bootstrap-icons';
function App() {
  
  const fakeProjects = [
    {
      id: 1,
      title: "Paisaje Sereno",
      description: "Una hermosa vista de un paisaje natural sereno.",
      imageUrl: "url-de-la-imagen-1.jpg",
      date: "2023-01-15",
      url: "https://www.ejemplo.com/proyecto1",
    },
    {
      id: 2,
      title: "Retrato en Blanco y Negro",
      description: "Un retrato artístico en blanco y negro de una persona.",
      imageUrl: "url-de-la-imagen-2.jpg",
      date: "2023-02-20",
      url: "https://www.ejemplo.com/proyecto2",
    },
    {
      id: 3,
      title: "Naturaleza Viva",
      description: "Fotografía de la belleza de la naturaleza en todo su esplendor.",
      imageUrl: "url-de-la-imagen-3.jpg",
      date: "2023-03-10",
      url: "https://www.ejemplo.com/proyecto3",
    },
    {
      id: 4,
      title: "Arte Abstracto",
      description: "Una expresión artística abstracta que desafía la imaginación.",
      imageUrl: "url-de-la-imagen-4.jpg",
      date: "2023-04-05",
      url: "https://www.ejemplo.com/proyecto4",
    },
    {
      id: 5,
      title: "Ciudad Nocturna",
      description: "Una visión de la ciudad de noche, llena de luces brillantes.",
      imageUrl: "url-de-la-imagen-5.jpg",
      date: "2023-05-18",
      url: "https://www.ejemplo.com/proyecto5",
    },
    {
      id: 6,
      title: "Aventura en el Bosque",
      description: "Una exploración en el corazón de un frondoso bosque.",
      imageUrl: "url-de-la-imagen-6.jpg",
      date: "2023-06-30",
      url: "https://www.ejemplo.com/proyecto6",
    },
  ];
  
  
  return (
    <Container>
      <Row>
        {fakeProjects.map((item) => (
          <Col sm={4} key={item.id}> {/* Cada tarjeta ocupará 4 columnas en pantallas pequeñas */}
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="primary">{Heart}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    
  )
}

export default App
