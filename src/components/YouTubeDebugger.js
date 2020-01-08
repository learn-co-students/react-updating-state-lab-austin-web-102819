// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YoutubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          };
      }
    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }
    handleClic = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>Click</button>
                <button className="resolution" onClick={this.handleClic}>Clic</button>
            </div>
        )
    }
}