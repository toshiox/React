import './home.css'
import {Card,Col, Row} from 'react-bootstrap';

function Home(){
    return (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col key={idx}>
              <Card className='card'>
                {/* <Card.Img className="material-icon" variant="top" src={require('./Images/csharp.png')} /> */}
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
}
export default Home;