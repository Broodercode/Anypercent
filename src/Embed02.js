import React from "react";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Embed02 extends React.Component {
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
      <div className="TwEmbed">
    
        <div id={this.props.targetID}></div>
      </div>
    )
  }
}

Embed02.defaultProps = {
    targetID: 'twitch-embed-02',
  width: '300px',
  channel: 'broodvx',
  height: '250px',
  layout: 'video'

}

export default Embed02;