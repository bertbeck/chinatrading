import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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

const App = () => (
  <div class="test" >
  <MuiThemeProvider>
    <AppBar title="Tenfins "
            children={<h1 class="menu">Technology Blog People Services ContactUs</h1>}
            iconElementRight={<Login />}
            iconStyleLeft={{color:"white"}}
            titleStyle={{color:"white",flex:'none'}}
            style={{position:'fixed',top:0,background: "transparent", color:"black"}}
    />

    <div className="jumbotron">
      <div className="container text-center">
        <div className="jumbotron-tenfins-section" style={{flexBasis:'none'}}>
          <div style={{textAlign:'center',flexBasis:'none',margin:'auto', width:'250px'}}>
          <h1 style={{fontSize:'22px',flexBasis:'none',color:'white',backgroundColor:'rgba(100, 131, 190, 0.4)'}}>Agile Mobile and Web Partnerships</h1>
        </div>
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

    <MyReactComponent />
  </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  <App title="Tenfins"/>,
  document.getElementById('root')
);

export default App;

