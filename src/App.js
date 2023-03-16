import './App.css';
import profilePic from "./assets/proPic.png";
import vector1 from "./assets/Vector1.png";
import vector2 from "./assets/Vector2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/sidebar/Sidebar';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [data1, setData1] = useState({})
  const [list1, setList1] = useState([])
  const [data2, setData2] = useState({})
  const [list2, setList2] = useState([])

  const [patientData, setPatientData] = useState({
    "investigations[0]" : null,
    "investigations[1]" : null,
    "investigations[2]" : null,
    "investigations[3]" : null,
    "investigations[4]" : null,
    "investigations[5]" : null,
    "investigations[6]" : null,
    "investigations[7]" : null,
    "investigations[8]" : null,
    "investigations[9]" : null,
    "investigations[10]" : null,
    "investigations[11]" : null,
    "investigations[12]" : null,
    "ctscan": null,
    "mri": null,
    "developer": "Developer"
  })
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://testdrive.kompletecare.com/api/investigations`, {
          headers: {
            Authorization: "Bearer 5034|mRuuuY0tzRPpAMqk6bmkdiTabQJp6DiktZN2MBwl"
          }
        });  

        setList1(response.data.data[0].investigations)
        setData2(response.data.data[1])
        setList2(response.data.data[1].investigations)

      } catch (error) { 
        console.log(error);
      }
    }
    getData()
  }, [])

  const handleChange = (e) => {
    setPatientData({...patientData, [e.target.name]:e.target.value})
    console.log(patientData);
  }

  axios.defaults.headers.common['X-CSRF-TOKEN'] = "Bearer 5034|mRuuuY0tzRPpAMqk6bmkdiTabQJp6DiktZN2MBwl";
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://testdrive.kompletecare.com/api/investigations", {patientData}, {
          headers: {
            Authorization: "Bearer 5034|mRuuuY0tzRPpAMqk6bmkdiTabQJp6DiktZN2MBwl",
            "Content-Type": "multipart/form-data",
          }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <section className='side'>
        <Sidebar />
      </section>
      <section className="mainPage">
        <Container>
          <div className="custom-topBar">
            <p>Take a Tour</p>
            <p><Image src={vector1}/></p>
            <p><Image src={vector2}/></p>
            <p><Image roundedCircle src={profilePic}/></p>
          </div>
          <h2 className='custom-header'>Update Patient Medical Record</h2>
          <p className='custom-text'>Click the tabs to view and edit patient medical details</p>

          <Form onSubmit={handleSubmit} className='custom-form'>            
            <Container>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Label className='custom-label1'>{data1.title}</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  {list1.map((investigation,index) => {
                    return <Col key={index} className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" value={index} name={`investigations[${index-1}]`} onChange={handleChange} label={investigation.title} /></Col>
                  })}
                </Row>
              </Form.Group>


              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Label className='custom-label1'>{data2.title}</Form.Label>
                <Row className="justify-content-start align-items-center custom-row">
                  {list2.map((investigation,index) => {
                    return <Col key={index} className='custom-col' sm={12} md={5} xl={3} lg={4}><Form.Check type="checkbox" value={index + 9} name={`investigations[${index +9-1}]`} onChange={handleChange} label={investigation.title} /></Col>
                  })}
                </Row>
              </Form.Group>

              <Form.Group className="" controlId="formBasicCheckbox">
                <Row className="justify-content-start align-items-center">
                  <Col lg={5}>
                    <Form.Label className='custom-label2'>CT Scan</Form.Label>
                    <Form.Select  onChange={handleChange} name='ctscan' aria-label="Default select example">
                      <option value="none" selected disabled hidden>*Specify</option>
                      <option value="Scan needed in the left cerebral hemisphere">Scan needed in the left cerebral hemisphere</option>
                    </Form.Select>
                  </Col>

                  <Col lg={{ span: 5, offset: 1 }} >
                    <Form.Label className='custom-label2'>MRI</Form.Label>
                    <Form.Select onChange={handleChange}  name='mri' aria-label="Default select example">
                      <option value="none" selected disabled hidden>*Specify</option>
                      <option value="Full body MRI">Full body MRI</option>
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
