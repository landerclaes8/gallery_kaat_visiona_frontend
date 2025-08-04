import React, { useEffect, useState } from "react";
import "../../styles/video.scss";
import { useMediaQuery } from "@mantine/hooks";
import { API_URL } from "../../lib/apiConfig";

interface Props {
  videoId: number;
}

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(
      `video-${videoId}`
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", () => {
        const aspectRatio = videoElement.videoHeight / videoElement.videoWidth;
        setIsVertical(aspectRatio > 1); // If height > width, it's vertical
      });
    }
  }, [videoId]);

  return isSmallScreen ? (
    <div className={`video-container`}>
      <video
        id={`video-${videoId}`}
        className="responsive-video"
        controls
        controlsList="nodownload"
      >
        <source src={`${API_URL}/api/videos/${videoId}`} type="video/mp4" />
        Je browser ondersteunt de video tag niet.
      </video>
    </div>
  ) : (
    <div
      className={`video-container ${isVertical ? "vertical" : "horizontal"} `}
    >
      <video
        id={`video-${videoId}`}
        className="responsive-video"
        controls
        controlsList="nodownload"
      >
        <source src={`${API_URL}/videos/${videoId}`} type="video/mp4" />
        Je browser ondersteunt de video tag niet.
      </video>
    </div>
  );
};

export default VideoPlayer;
