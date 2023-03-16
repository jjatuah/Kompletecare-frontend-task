import './App.css';
import profilePic from "./assets/proPic.png";
import vector1 from "./assets/Vector1.png";
import vector2 from "./assets/Vector2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/sidebar/Sidebar';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'; 
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

function App() {

  let options=["Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out"];
  return (
    <div className="App">
      <section className='side'>
        <Sidebar />
      </section>
      <section className="mainPage">
        <Container>
          <Row className="justify-content-end align-items-center custom-topBar">
            <Col xs={1} sm={4} md={3} lg={2}>Take a tour</Col>
            <Col xs={1} sm={1}  md={1}><Image src={vector1}/> </Col>
            <Col xs={1} sm={1}  md={1}><Image src={vector2}/></Col>
            <Col xs={1} sm={1} md={1}><Image roundedCircle src={profilePic}/></Col>
          </Row>
          <h2 className='custom-header'>Update Patient Medical Record</h2>
          <p className='custom-text'>Click the tabs to view and edit patient medical details</p>

          <Form className='custom-form'>            
            <Container>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Label className='custom-label1'>Email address</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  {options.map((option,index) => {
                    return <Col key={index} className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label={option} /></Col>
                  })}
                </Row>
              </Form.Group>


              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Label className='custom-label1'>Email address</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                  <Col className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label="Check me out" /></Col>
                </Row>
              </Form.Group>

              <Form.Group className="" controlId="formBasicCheckbox">
                <Row className="justify-content-start align-items-center">
                  <Col lg={5}>
                    <Form.Label className='custom-label2'>Email address</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option disabled>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>

                  <Col lg={{ span: 5, offset: 1 }} >
                    <Form.Label className='custom-label2'>Email address</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="none" selected disabled hidden>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
              <input className="custom-submitBtn" type="submit" value={"Save and Send"} />
            </Container>
          </Form>

        </Container>
      </section>
    </div>
  );
}

export default App;
