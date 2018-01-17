import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mdb.css'
// import 'mdbootstrap/css/mdb.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MyReactComponent from './MyReactComponent';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


import Row from './components/Row'
import Col from './components/Col'
import Button from './components/Button'
import Input from './components/Input'
import FormInline from './components/FormInline'

import Post from './components/Post'
import Person from './components/Person'
import PersonDescription from './components/PersonDescription'

import posts from './data/posts.json'
import people from './data/people.json'
import YouTube from './youtube'

import './App.css';
import YouTubePlayer from "./components/YouTubePlayer";

const RightMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class Login extends Component {
  static muiName = 'FlatButton';

  render1() {
    return (<div>hello</div>);
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton iconStyle={{color:'white'}}><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );
  }
}
// For helpful info see: https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js

function handleScroll() {
  alert('here');
}
class App extends Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollTop: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile : window.innerWidth < window.innerHeight
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight, isMobile : window.innerWidth < window.innerHeight });
  };

  handleScroll(event) {

    let scrollTop = Math.max(document.body.scrollTop,document.documentElement.scrollTop);


    //alert('scrollTop='+scrollTop);

    this.setState({
      scrollTop: scrollTop
    });
  }


  render() {
    //this.state.isMobile = true;

    if (!this.state.isMobile)
    return (
      <MuiThemeProvider>
        <div onScroll={this.handleScroll}>
          <div className="web">
            <div
              style={{verticalAlign: 'middle', textAlign: 'center', flexBasis: 'none', margin: 'auto', width: '300px'}}>
              <h1 style={{
                marginTop: '50px',
                padding: '10px',
                fontSize: '24px',
                fontWeight: 400,
                flexBasis: 'none',
                color: 'white',
                backgroundColor: 'rgba(100, 131, 190, 0.6)'
              }}>China Business Development Services</h1>
            </div>
          </div>

          <AppBar title="China Trading Group "
                  children={<h1 style={{color: this.state.scrollTop ==0 ? "white" : "black"}} className="menu">Who we are&nbsp;&nbsp;&nbsp;&nbsp;What we do&nbsp;&nbsp;&nbsp;Contact Us</h1>}
                  iconElementRight={<Login/>}
                  iconStyleLeft={{color: this.state.scrollTop ==0 ? "white" : "black"}}
                  titleStyle={{color: this.state.scrollTop ==0 ? "white" : "black", flex: 'none'}}
                  style={{position: 'fixed', top: 0, background: this.state.scrollTop ==0 ? "transparent" : "white", color: "black"}}
          />


          <div id="tech" className="technology padding-style-page">
            <div className="container section-header">
              {/* <h3 style={{color: 'rgb(24,25,26)'}}>Opportunities in China</h3> */}
              <br/>
              <h2 style={{margin: '2% 4%'}}>China's GDP growth averages nearly 10 percent a year—the fastest sustained expansion by a major economy in history. </h2>
              <h2 style={{margin: '2% 4%'}}>This growth creates tremendous opportunity and demand for Western Goods and Services.</h2>
              <h2 style={{margin: '2% 4%'}}>Chinese exports continue to present opportunities for Western Business.</h2>
            </div>
          </div>

          <div className="people-section padding-style-page">
            <div className="container section-header">
              <div className="title-subtitle-section">
                <br/>
                <h3>Who We Are</h3>
              </div>
              {
                <Row>
                  {
                    people.map((person, index) => {
                      return (
                        <Col md="4" className="mb-5" key={index}>
                          <Person name={person.name} photo={person.photo} role={person.role} description={person.description} />
                        </Col>
                      )
                    })
                  }
                </Row>
              }
            </div>
          </div>


          <div className="people-section padding-style-page">
            <div className="container section-header">
              <div className="title-subtitle-section">
                <br/>
                <h3>What We Do</h3>
              </div>
              {
                <Row>
                  {
                    people.map((person, index) => {
                      return (
                        <Col md="4" className="mb-5" key={index}>
                          <PersonDescription name={person.name} description2={person.description2} />
                        </Col>
                      )
                    })
                  }
                </Row>
              }
            </div>
          </div>

          {/* <div className="blog-section padding-style-page">
            <div className="container section-header">

              <Row>
                {
                  posts.map((post, index) => {
                    return (
                      <Col md="4" className="mb-5" key={index}>
                        <Post title={post.title} date={post.date} text={post.text} />
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div> */}

          <div className="contact-section padding-style-page">
            <div className="container section-header">
              <div className="row">
                <div className="col-md-6">
                  <h2>Contact Us</h2>
                  <div className=" ">
                    <Input label="Name"  group type="text" />
                    <Input label="Email"  group type="email" />
                    <Input type="textarea" label="What help do you need?"/>
                    <Button color="elegant" className="btn btn-block send-mesage-button">Submit</Button>
                  </div>
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>
          </div>


        </div>
      </MuiThemeProvider>

    );

    if (this.state.isMobile)
      return (
        <MuiThemeProvider>
          <div onScroll={this.handleScroll}>
            <div className="mobile">
              <div
                style={{verticalAlign: 'middle', textAlign: 'center', flexBasis: 'none', margin: 'auto', width: '300px'}}>
                <h1 style={{
                  marginTop: '50px',
                  padding: '10px',
                  fontSize: '24px',
                  fontWeight: 400,
                  flexBasis: 'none',
                  color: 'white',
                  backgroundColor: 'rgba(100, 131, 190, 0.6)'
                }}>China Business Development Services</h1>
              </div>
            </div>

            <AppBar title="China Trading Group "
                    iconElementRight={<Login/>}
                    iconStyleLeft={{color: this.state.scrollTop ==0 ? "white" : "black"}}
                    titleStyle={{color: this.state.scrollTop ==0 ? "white" : "black", flex: 'none'}}
                    style={{position: 'fixed', top: 0, background: this.state.scrollTop ==0 ? "transparent" : "white", color: "black"}}
            />


            <div id="tech" className="technology padding-style-page">
              <div className="container section-header">
                {/* <h3 style={{color: 'rgb(24,25,26)'}}>Opportunities in China</h3> */}
                <br/>
                <h3 className="mobileHeading" style={{margin: '2% 4%'}}>China's GDP growth averages nearly 10 percent a year! </h3>
                <h3 className="mobileHeading" style={{margin: '2% 4%'}}>Opportunity to export Western Goods and Services</h3>
                <h3 className="mobileHeading" style={{margin: '2% 4%'}}>Opportunuity to import quality Chinese products.</h3>
              </div>
            </div>

            <div className="people-section padding-style-page">
              <div className="container section-header">
                <div className="title-subtitle-section">
                  <br/>
                  <h3>Who We Are</h3>
                </div>
                {
                  <Row>
                    {
                      people.map((person, index) => {
                        return (
                          <Col md="2" className="mb-5" key={index}>
                            <Person name={person.name} photo={person.photo} role={person.role} description={person.description} />
                          </Col>
                        )
                      })
                    }
                  </Row>
                }
              </div>
            </div>


            <div className="people-section padding-style-page">
              <div className="container section-header">
                <div className="title-subtitle-section">
                  <br/>
                  <h3>What We Do</h3>
                </div>
                {
                  <Row>
                    {
                      people.map((person, index) => {
                        return (
                          <Col md="4" className="mb-5" key={index}>
                            <PersonDescription name={person.name} description2={person.description2} />
                          </Col>
                        )
                      })
                    }
                  </Row>
                }
              </div>
            </div>

            {/* <div className="blog-section padding-style-page">
            <div className="container section-header">

              <Row>
                {
                  posts.map((post, index) => {
                    return (
                      <Col md="4" className="mb-5" key={index}>
                        <Post title={post.title} date={post.date} text={post.text} />
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div> */}

            <div className="contact-section padding-style-page">
              <div className="container section-header">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <div className=" ">
                      <Input label="Name"  group type="text" />
                      <Input label="Email"  group type="email" />
                      <Input type="textarea" label="What help do you need?"/>
                      <Button color="elegant" className="btn btn-block send-mesage-button">Submit</Button>
                    </div>
                  </div>
                  <div className="col-md-6">
                  </div>
                </div>
              </div>
            </div>


          </div>
        </MuiThemeProvider>
      );

  }
}

ReactDOM.render(
  <App title="Tenfins"/>,
  document.getElementById('root')
);

export default App;

