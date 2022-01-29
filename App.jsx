import React from 'react'
import { render } from 'react-dom';
import Example from './pricing.js';
import './App.css';
import instaimage from './background-pic1.jpg';
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';


function App() {
  return (
    <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Business</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div>
    <img src={instaimage} className="instaimage" alt="logo" />
  </div>
  <div className="app-wrapper">
  <Header />
  <div>
        <Example />
      </div>
  <style jsx global>{`
        .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 14px;
          --brand-color: blue;
          --gray-color-1: #777;
          --gray-color-2: #555;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: transparent;
          background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/hero-bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
      
  </div>
</>
);
}

export default App;
