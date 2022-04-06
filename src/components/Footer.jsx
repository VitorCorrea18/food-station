import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <Container
      className="fixed-bottom border explore-bar main-footer"
      fluid
      data-testid="footer"
    >
      <Row className="py-2">
        <Col className="d-flex justify-content-center">
          <Link to="/drinks">
            <Image
              data-testid="drinks-bottom-btn"
              src={ drinkIcon }
              alt="drink's icon"
              fluid
            />
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/explore">
            <Image
              data-testid="explore-bottom-btn"
              src={ exploreIcon }
              alt="explore's icon"
              fluid
            />
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/foods">
            <Image
              data-testid="food-bottom-btn"
              src={ mealIcon }
              alt="food's icon"
              fluid
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
