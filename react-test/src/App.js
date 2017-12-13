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

import posts from './data/posts.json'
import people from './data/people.json'
import YouTube from './youtube'

import './App.css';

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
      scrollTop: 0
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {

    let scrollTop = Math.max(document.body.scrollTop,document.documentElement.scrollTop);


    //alert('scrollTop='+scrollTop);

    this.setState({
      scrollTop: scrollTop
    });
  }


  render() {
    return (
      <MuiThemeProvider>
        <div onScroll={this.handleScroll}>
          <div className="test">
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
              }}>Agile Mobile and Web Development</h1>
            </div>
          </div>

          <AppBar title="Tenfins "
                  children={<h1 style={{color: this.state.scrollTop ==0 ? "white" : "black"}} className="menu">Technology Blog People Services Contact</h1>}
                  iconElementRight={<Login/>}
                  iconStyleLeft={{color: this.state.scrollTop ==0 ? "white" : "black"}}
                  titleStyle={{color: this.state.scrollTop ==0 ? "white" : "black", flex: 'none'}}
                  style={{position: 'fixed', top: 0, background: this.state.scrollTop ==0 ? "transparent" : "white", color: "black"}}
          />


          <div id="tech" className="technology padding-style-page">
            <div className="container section-header">
              <h3 style={{color: 'rgb(24,25,26)'}}>Technology</h3>
              <h2 style={{margin: '20px 80px'}}>Mobile apps today can be developed with Native, Hybrid or Cross
                Platforms
                tools.
                Hybrid tools use embedded web browser controls and are slow
                Cross Platform tools use Native api's and are closer to Native performance
                React Native and Google's new tool Flutter are Cross Platform tools.</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Google Flutter is new tech that is coming on strong and will challenge React Native.
                        We think Flutter has the potential to be a better solution.
                      </h4>
                      <h5 className="left-section">
                        "While it's still very early days, the team are onto something big, They have hit a sweet
                        spot of productivity and power, and have the momentum and backing to be successful.
                        The ability to write an app that runs on both iOS and Android,
                        with one code base, without compromise, using a highly productive
                        language and set of libraries -- it's a compelling value proposition."
                      </h5>
                      <p className="author-style">- Tim Sneath, 17-Year Microsoft Vet now leading Google's Flutter Team
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="embed-responsive embed-responsive-16by9">
                    <YouTube video="1BXg4wfB9pA" autoplay="0" rel="0" modest="1" width="600"/>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="blog-section padding-style-page">
            <div className="container section-header">
              <div className="title-subtitle-section">
                <h3>The Blog</h3>
                <h2>Thoughts, musings, and ruminations.</h2>
              </div>

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
          </div>

          <div className="people-section padding-style-page">
            <div className="container section-header">

              <div className=" padding-style-page-video">
                <div className="row">
                  <div className="col-md-7">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FabSNo2P9mMM%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DabSNo2P9mMM&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FabSNo2P9mMM%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h2>React Native</h2>
                    <p className="video-text-style">Scaling to 80 Million Users </p>
                    <p>React Native is making inroads into <br /> mainstream Mobile cross platform <br /> development. </p>
                  </div>
                </div>
              </div>
              <div className=" padding-style-page-video">
                <div className="row">
                  <div className="col-md-5">
                    <h2>Flutter vs React Native</h2>
                    <p className="video-text-style">Scaling to 80 Million Users </p>
                    <p>Mobile developers compare Flutter and React Native </p>
                  </div>
                  <div className="col-md-7">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FabSNo2P9mMM%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DabSNo2P9mMM&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FabSNo2P9mMM%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0" className="embedly-embed"></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="title-subtitle-section">
                <br/>
                <h3>People</h3>
                <h2>
                  Success comes from People and Technology you can rely on <br />
                  We're based in Boulder, Colorado and can assist locally or remotely <br />
                  We've got expertise in React Native, Flutter and Backends in C#, Dart and Java <br />
                  .
                </h2>
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

          <div className="services-section padding-style-page">
            <div className="container section-header">
              <div className="title-subtitle-section">
                <h3>Services</h3>
                <h2>Contact us for Mobile and Web Development</h2>
                <FormInline color="elegant" className="text-center">
                  <Input label=" Name"  group type="text" />
                  <Input label="Email"  group type="email" />
                  <Button color="elegant" >Submit</Button>
                </FormInline>
              </div>
            </div>
          </div>

          <div className="contact-section padding-style-page">
            <div className="container section-header">
              <div className="row">
                <div className="col-md-6">
                  <h5>Got Questions? </h5>
                  <h2> We've Got Answers.</h2>
                  <div className=" ">
                    <Input label="Name"  group type="text" />
                    <Input label="Email"  group type="email" />
                    <Input type="textarea" label="Basic textarea"/>
                    <Button color="elegant" className="btn btn-block send-mesage-button">Submit</Button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <iframe className="google-maps-style" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d48855.52246526886!2d-105.2136303!3d40.0649237!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1512580175503" allowFullScreen={false}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-contact-section padding-style-page">
            <div className="container section-header">
              <div className="row">
                <div className="col-md-2">
                  <address>
                    <strong> <h5>About Us</h5></strong>
                    <h6>Our Mission</h6>
                    <h6>We're Hiring!</h6>
                  </address>
                </div>
                <div className="col-md-2">
                  <address>
                    <strong>  <h5>Information</h5></strong>
                    <h6>Consultants Available</h6>
                    <h6>Help & Support</h6>
                  </address>
                </div>
                <div className="col-md-2">
                  <address>
                    <strong> <h5>Contact</h5></strong>
                    <h6>720-354-2372</h6>
                    <h6>info@tenfins.com</h6>
                  </address>
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

