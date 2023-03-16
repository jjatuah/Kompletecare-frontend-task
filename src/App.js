import './App.css';
import profilePic from "./assets/proPic.png";
import vector1 from "./assets/Vector1.png";
import vector2 from "./assets/Vector2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/sidebar/Sidebar';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'; 
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let options=["Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out", "Check me out","Check me out","Check me out", "Check me out", "Check me out", "Check me out"];

  const [data1, setData1] = useState({})
  const [list1, setList1] = useState([])
  const [data2, setData2] = useState({})
  const [list2, setList2] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://testdrive.kompletecare.com/api/investigations`, {
          headers: {
            Authorization: "Bearer 5034|mRuuuY0tzRPpAMqk6bmkdiTabQJp6DiktZN2MBwl"
          }
        });  

        // console.log(response.data.data[0].investigations);
        // console.log(response.data.data[0]);
        setData1(response.data.data[0])
        setList1(response.data.data[0].investigations)
        setData2(response.data.data[1])
        setList2(response.data.data[1].investigations)

      } catch (error) { 
        console.log(error);
      }
    }
    getData()
  }, [])
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
                <Form.Label className='custom-label1'>{data1.title}</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  {list1.map((investigation,index) => {
                    return <Col key={index} className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label={investigation.title} /></Col>
                  })}
                </Row>
              </Form.Group>


              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Label className='custom-label1'>{data2.title}</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  {list2.map((investigation,index) => {
                    return <Col key={index} className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" label={investigation.title} /></Col>
                  })}
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
