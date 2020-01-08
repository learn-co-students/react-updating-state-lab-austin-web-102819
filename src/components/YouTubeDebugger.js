// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
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

  handleBitRateClick = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolutionClick = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button
          name="bitrate"
          className="bitrate"
          onClick={this.handleBitRateClick}
        >
          Bit rate
        </button>
        <button
          name="resolution"
          className="resolution"
          onClick={this.handleResolutionClick}
        >
          Resolution
        </button>
      </div>
    );
  }
}
