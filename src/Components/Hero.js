import React, { Component } from 'react';
import '../Styles/Main.css';
import Button from './Button';
import { Container, Row, Col } from 'reactstrap';

class Main extends Component {
  render() {
    const tryitbutton = 'try it now';
    
    return (
      <div className="Herowrapper">
       <Container>
        <Row>
          <Col md="12">
          <div>No apps, no installs. Just reminders.</div>
          <Button buttontext={tryitbutton}/>
          </Col>
          <Col md="4">A simple way to send text messages from your phone…</Col>
          <Col md="4">…to yourself or your friends and family members…</Col>
          <Col md="4">…on any regular schedule, or at any moment in the future.</Col>
        </Row>
        </Container>  
      </div>
    );
  }
}

export default Main;
