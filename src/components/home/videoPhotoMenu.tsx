import VideoPhotoMenuItem from "./VideoPhotoMenuItem";
import "../../styles/flowingMenu.scss";
const items = [
  {
    link: "/video",
    title: "Video",
    text: "Explore Video Projects",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "/photo",
    title: "Photo",
    text: "Explore Photo Projects",
    image: "https://picsum.photos/600/400?random=2",
  },
];

const VideoPhotoMenu = () => {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, index) => (
          <VideoPhotoMenuItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default VideoPhotoMenu;
