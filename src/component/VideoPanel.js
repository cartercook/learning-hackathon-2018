import React from "react";
import YouTube from "./YouTube";

import "./Panel.css";

class VideoPanel extends React.Component {
    render() {
        return (
          <div className="component-video-panel">
                <YouTube video="tHYis-DP0oU" autoplay="0" rel="0" modest="1" />
          </div>
        );
    }
}

export default VideoPanel;