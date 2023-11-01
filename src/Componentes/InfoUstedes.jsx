import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { ProjectContext } from '../Context/AuthContext';

function Creaciones() {
  const { projects } = useContext(ProjectContext);
  const [likedProjects, setLikedProjects] = useState([]);

  const handleLike = (projectId) => {
    if (likedProjects.includes(projectId)) {
      setLikedProjects(likedProjects.filter((id) => id !== projectId));
    } else {
      setLikedProjects([...likedProjects, projectId]);
    }
  };

  return (
    <Container>
      <Row>
        {projects.map((item) => (
          <Col sm={4} key={item.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Ver Mas</Button>
                {likedProjects.includes(item.id) ? (
                  <HeartFill onClick={() => handleLike(item.id)} fill="red" />
                ) : (
                  <Heart onClick={() => handleLike(item.id)} />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Creaciones;
