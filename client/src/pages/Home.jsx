import Player from "../components/videoPlayer/Player";

const Home = () => {
  return (
    <div className="lg:w-container lg:max-w-container flex flex-col items-center  rounded-custom">
      <div className="w-screen h-[66.78vh] rounded-custom">
        <Player />
      </div>
    </div>
  );
};

export default Home;
