import React, { Component } from 'react';
import './Home.css';
import { Card } from 'antd';

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'เนื้อหา',
  },
  {
    key: 'app',
    tab: 'ตัวอย่างคำสั่งเบื้องต้น',
  },
  {
    key: 'project',
    tab: 'โปรแกรมที่ใช้พัฒนา',
  },
];
const contentListNoTitle = {
  article: <div>
    <h6>Root of Equation(all complete)</h6>

    <h6 style={{ color: 'gray' }}>Linear Algeabra (all in process)</h6>

    <h6 style={{ color: 'gray' }}>Interpolation and Extrapolation (all in process)</h6>

    <h6 style={{ color: 'gray' }}>Least-Squares Ression (all in process)</h6>

    <h6>Integration Techniques (all complete)</h6>

    <h6>Differention Techniques(all complete)</h6>

  </div>,
  app: <div>

    <p>บวก   :   + </p>
    <p>ลบ    :    - </p>
    <p>คูณ    :    * </p>
    <p>หาร    :    / </p>
    <p>ยกกำลัง   :  ^ </p>
    <p>ค่าe    :    e </p>
    <p>ค่าพาย   :   pi </p>
    <p>ค่า log   :  log</p>
    <a href="https://mathjs.org/docs/expressions/syntax.html">More</a>
  </div>,
  project: <div>
    <br/>
    <a href="https://code.visualstudio.com/">Visual Studio Code</a><br/><br/>
    <a href="https://docs.docker.com/toolbox/toolbox_install_windows/">Docker Toolbox</a>
    <br/><br/><br/><br/>
    
  </div>,
};

class Home extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {

    return (
      <div className="HP">
        <h3 className="header" style={{ paddingTop: "20px" }}>ยินดีต้อนรับเข้าสู่ Website เป็นส่วนหนึ่งของวิชา Numerical Method<br /></h3>
        <div style={{ padding: "30px 200px 200px" }}>
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            //tabBarExtraContent={<a href="#">More</a>}
            onTabChange={key => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      </div>

    );
  }
}
export default Home;
