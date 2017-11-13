import React, { Component } from 'react';
import LoginHeader from './components/login-header';
import Main from './components/tabs';
import Quote from './components/quote-generator';
import Footer from './components/footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Row, Col } from 'reactstrap';
import './app.css'

import Sticky1 from './components/sticky1'
import Sticky2 from './components/sticky2'
import Sticky3 from './components/sticky3'
import './sticky.css'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="container">
      <Container fluid>
        <Row>
          <Col>
            <LoginHeader />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="sticky-contain">
              <Sticky1/>
            </div>
          </Col>
          <Col>
            <div className="sticky-contain">
              <Sticky2/>
            </div>
          </Col>
          <Col>
            <div className="sticky-contain">
              <Sticky3/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Quote />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
      </div>
      </MuiThemeProvider>
    )
  }
}
