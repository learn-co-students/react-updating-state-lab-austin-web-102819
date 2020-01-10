import React, { Component } from "react";

// Code YouTubeDebugger Component Here

class YoutubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleChangeSettings = () => {
    this.setState({ settings: { ...this.state.settings, bitrate: 12 } });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { ...this.state.settings.video, resolution: "720p" }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeSettings}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YoutubeDebugger;
