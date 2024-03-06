import Player from "../components/videoPlayer/Player";
import BottomNavBar from "../components/bottomnav/BottomNavBar";

const Home = () => {
  return (
    <div className="lg:w-container lg:max-w-container flex flex-col items-center  rounded-custom">
      <div className="w-screen h-[66.78vh] rounded-custom">
        <Player />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Home;
