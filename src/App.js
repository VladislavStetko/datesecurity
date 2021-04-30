import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col} from 'antd';
import NavBar from './components/layout/NavBar';
import Tasks from './components/layout/Tasks';


const App = () => (
  <Row>
    <Col span="4">
      <NavBar/>
    </Col>
    <Col span="20">
      <Tasks/>
    </Col>
  </Row>
);

export default App;