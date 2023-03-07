import React from "react";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Embed04 extends React.Component {
    componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    );
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
        document.body.appendChild(script);
  }

  render() {

    return (
        <div>
    
        <div id={this.props.targetID}></div>
      </div>
    )
  }
}

Embed04.defaultProps = {
    targetID: 'twitch-embed-04',

  channel: 'yogidamonk',
  height: '500',
  width: '100%',
  layout: 'video'

}

export default Embed04;