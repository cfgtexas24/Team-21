import { YouTubeVideo } from "@/types/Types";

interface LessonSideBarProps {
  videos: YouTubeVideo[];
}

const LessonSideBar = ({ videos }: LessonSideBarProps) => {
  return (
    <div>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonSideBar;
