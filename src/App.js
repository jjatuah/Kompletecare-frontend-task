import './App.css';
import profilePic from "./assets/proPic.png";
import vector1 from "./assets/Vector1.png";
import vector2 from "./assets/Vector2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/sidebar/Sidebar';
import {Container, Row, Col, Image} from 'react-bootstrap'; 
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section className="mainPage">
        <Container>
          <Row className="justify-content-end align-items-center custom-topBar">
            <Col className='custom-topBarCol' xs={1} sm={1} md={1} lg={1}>Take a tour</Col>
            <Col className='custom-topBarCol' xs={1} sm={1} fluid md={1}><Image src={vector1}/> </Col>
            <Col className='custom-topBarCol' xs={1} sm={1} fluid md={1}><Image src={vector2}/></Col>
            <Col className='custom-topBarCol' xs={1} sm={1} md={1}><Image roundedCircle fluid src={profilePic}/></Col>
          </Row>
          <h2 className='custom-header'>Update Patient Medical Record</h2>
          <p className='custom-text'>Click the tabs to view and edit patient medical details</p>

          

        </Container>
      </section>
    </div>
  );
}

export default App;
