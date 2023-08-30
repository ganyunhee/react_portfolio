import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

import { Wrapper, Marquee } from "./Marquee";
const MARQUEE_TEXT = [
  "--",
  "So many things I want to Do"
];

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            {/*이미지 파일의 기본 폴더는 public*/}
            <Image src="./profile.jpg" alt="프로필 사진" 
            style={{ border: '5px solid var(--dark)', width: 300, margin: 50 }} 
            roundedCircle />
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              <b># Eunice Gan</b> <br />
              바탕가스, 필리핀 출신 <br />
              한국에 2017년 이주 <br />
              서강대학교 컴퓨터공학과 <br />
              <br />
              <b># 장점</b> <br />
              열정적이고 끈기 있는 성격 <br />
              호기심 많고 배우는 것을 좋아하는 특징 <br />
              정직하고 부지런한 언행 <br />
              보면서 배우고 행동을 맞출 수 있는 능력 <br />
              <br />
              <b># 단점</b> <br />
              완벽을 추구하는 성향 <br />
              설명을 기다리고 고집스러운 경향 <br />
              유치하고 특이한 개그코드 <br />
              한계를 지키지 못해 과로하는 습관 <br />
            </p>
            </Col>
        </Row>
      </Container>
      <br /><br />
      {/*
      <marquee scrollamount="10" scrolldelay="50">-- So many things I want to do --</marquee>
      */}
      <Wrapper>
        <Marquee list={MARQUEE_TEXT} time={5} />
      </Wrapper>
      <br />
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                text="Quantastic Web App"
                alt="First slide"
              />
              <Carousel.Caption>
                <h4>Quantastic Web App</h4>
                <p style={{ color: "var(--light)" }}>Explanation Here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h4>PAINT Program</h4>
                <p style={{ color: "var(--light)" }}>Explanation Here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h4>Pacman Adversarial Search</h4>
                <p style={{ color: "var(--light)" }}>Explanation Here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h4>Lane Auto Detection</h4>
                <p style={{ color: "var(--light)" }}>Explanation Here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <h4>AI Color Picker</h4>
                <p style={{ color: "var(--light)" }}>Explanation Here.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "var(--light)", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>eunicenellgan@gmail.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "var(--light)", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-5475-9962</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "var(--light)", margin: 0, padding: 3 }}>SNS</h3>
            <p style={{ margin: 0, padding: 10 }}>@ganyuniseu</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; Eunice Gan. All Rights Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;
