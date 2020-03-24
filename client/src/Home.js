import React, { Component } from 'react';
//import './Home.css';
//import { Layout } from 'antd';
//import { Body } from 'react-bootstrap/lib/Media';

//const { Header, Footer, Sider, Content } = Layout;

class Home extends Component{

    render(){

      return(
        <div className = "Home" >
          <h2 style={{textAlign : "center",padding:"50px" }}>ยินดีต้อนรับเข้าสู่ Website ที่เป็นส่วนหนึ่งของวิชา Numerical Method</h2>
        </div>
          
      );
    }
}
export default Home;
