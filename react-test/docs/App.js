import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Card, CardBody, CardImage, CardTitle, CardText, Input, FormInline  } from 'mdbreact';
import './index.css';
 

const NavLink = require('react-router-dom').NavLink;

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling id="mainNav">
            <NavbarBrand href="/"> 
              

            </NavbarBrand>
            <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-left">
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" id="tech" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" to="/css">Tech</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" to="/components">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" to="/javascript">People</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" to="/javascript">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link js-scroll-trigger" to="/javascript">Contact us</NavLink>
                </NavItem>
              </NavbarNav>

            </div>
          </Navbar>
           
            <div className="jumbotron">
              <div className="container text-center">
                <div className="jumbotron-tenfins-section">
                <p>Agile Mobile and Web</p>
                <h2>Tenfins </h2>
                </div>
              </div>
            </div>
           
           <div id="tech" className="technology padding-style-page">
             <div className="container text-center">
                <h3>Technology</h3> 
                <h2>Mobile apps today can be developed with Native, Hybrid or Cross Platforms tools. 
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
                        <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1BXg4wfB9pA%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1BXg4wfB9pA&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1BXg4wfB9pA%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                      </div>

                    </div>
                </div>
             </div>
           </div>
           <div className="blog-section padding-style-page">
                <div className="container">
                  <div className="title-subtitle-section">
                    <h5>The Blog</h5>
                    <h2>Thoughts, musings, and ruminations.</h2>
                  </div>
                </div>
           </div>

           <div className="people-section padding-style-page">
               <div className="container">
                <div className="title-subtitle-section">
                  <h3>People</h3>
                  <h2> Success comes from People and Technology you can rely on <br />
                  We're based in Boulder, Colorado and can assist locally or remotely <br />
                  We've got expertise in React Native, Flutter and Backends in C#, Dart and Java <br />
                  .</h2>
                </div> 
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
                </div>
              </div>
              </div>
              <div className="services-section padding-style-page">
                <div className="container">
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
                <div className="container">
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
                        <iframe className="google-maps-style" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d48855.52246526886!2d-105.2136303!3d40.0649237!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1512580175503" allowfullscreen></iframe>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              


              <div className="about-us-contact-section padding-style-page">
                <div className="container">
                 <div className=" ">
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
                          <h6>bertbeck@gmail.com</h6>
                        </address>
                      </div>

                    </div>
                    </div>
                </div>
              </div>

           
          <Footer color=" " className="footer-copyright">
            <div className="container">
             <hr />
            <p className="footer-copyright mb-0">
            
             <a href="https://www.tenfins.com"> Tenfins </a> &copy; {(new Date().getFullYear())} 
            </p>
            </div>
          </Footer>
        </div>
        </Router>
    );
  }
}

export default App;
