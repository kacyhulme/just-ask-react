import React, { Component } from 'react';
import '../Styles/Main.css';
import Button from './Button';
import { Container, Row, Col } from 'reactstrap';

class Main extends Component {
  render() {
    const otherbutton = 'some other text';

    return (
    <div className="tryitnowwrapper">
      <Container>
        <Button buttontext={otherbutton}/>
        <Row>
          <Col md="6">
            <p>Check up on family members and loved ones.</p>
            <p>Just Ask from Jen: Don't forget to buy flowers!</p>
            <p>I almost forgot!</p>
          </Col>
          <Col md="6">
            <p>Remember appointments and encourage good habits!</p>
            <p>Running group at 6pm tonight!</p>
            <p>Yes!</p>
          </Col>
        </Row>
      </Container>  
    </div>
      
    );
  }
}

export default Main;
