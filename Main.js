import "./main.css";
import Interview from "./Interview";
import Details from "./Details";
import Slider from "./Slider";

//main is a parent component cotaining image and company lists
const Main = () => {
  return (
    <div className="main">
      <Interview />
      <Slider/>
      <Details />
    </div>
  );
};

export default Main;
