import Navbar from "../components/Navbar";
import approch_image from "../assets/Images/approch.png";


import Video_content from "../components/Video_content";
import Footer from "../components/Footer";




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

        <Video_content/>

        {/* footer  */}
        <Footer/>

        
      </div>

      {/* <Slider/> */}
    </div>
  );
};

export default Approach;
