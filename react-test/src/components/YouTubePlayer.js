import React, { Component } from 'react'
import '../css/YouTubePlayer.css'

class YouTubePlayer extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <div class="youtube-player" data-id="1BXg4wfB9pA"></div>
    );
  }

  //  Create the youtube <div>
  onLoad() {

      var div, n,
        v = document.getElementsByClassName("youtube-player");
      for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = this.labnolThumb(v[n].dataset.id);
        div.onclick = this.labnolIframe;
        v[n].appendChild(div);
      }
  }

  labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
  }

  labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
  }

}



const styles = {

  playerStyle : {
    position: 'relative',
    paddingBottom: '56.23%',
    /* Use 75% for 4:3 videos */
    height: 0,
    overflow: 'hidden',
    width: '70%',
    background: '#000',
    margin: '5px',
  },

  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '100',
    background: 'transparent',
  },

  img: {
    bottom: 0,
    display: 'block',
    left: 0,
    margin: 'auto',
    maxWidth: '100%',
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    border: 'none',
    height: 'auto',
    cursor: 'pointer',
    webkitTransition: '.4s all',
    mozTransition: '.4s all',
    transition: '.4s all',
  },

  play: {
    height: '72px',
    width: '72px',
    left: '50 %',
    top: '50 %',
    marginLeft: '-36px',
    marginTop: '-36px',
    position: 'absolute',
    background: 'url("//i.imgur.com/TxzC70f.png") no-repeat',
    cursor: 'pointer',
  },

  imgHover : {
    webkitFilter: 'brightness(75%)',
  }
};

export default YouTubePlayer