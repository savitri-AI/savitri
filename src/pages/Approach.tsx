import Navbar from "../components/Navbar";
import approch_image from "../assets/Images/approch.png";
import one from "../assets/video/one.mp4";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Approach = () => {

  

  return (
    <div className="Home-container ">
      <Navbar />

      <div className="contant-fe-re-container">
        <div className="contant-container">
          {/* first content here  */}
          <div className="left-part-content">
            <img src={approch_image} alt="" />
            <h1>Video Generative AI</h1>
          </div>
          <div className="right-part-content">
            <h5>
              Transform Your Imagination into Reality with AI-Powered Video
              Generation
            </h5>
            <p>
              Capture the essence of creativity and let AI bring your stories to
              life.
            </p>
          </div>
        </div>

        {/* first video content here  */}

        <div className="add-button-and-video-container">
          <button id="slideLeft" type="button">
            <FaChevronLeft />
          </button>
          <div className="video-content-contanier">

            
            <video autoPlay controls>
              <source src={one} type="video/mp4" />
            </video>



          </div>
          <button id="slideRight" type="button">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Approach;
