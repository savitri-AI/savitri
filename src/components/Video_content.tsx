import React from 'react'
import one from "../assets/video/one.mp4";
import two from "../assets/video/two.mp4";
import three from "../assets/video/three.mp4";
import four from "../assets/video/four.mp4";
import five from "../assets/video/campfire.mp4"
import chicken from "../assets/video/chicken.mp4"
import church from "../assets/video/church.mp4"
import churning from "../assets/video/churning.mp4";


const Video_content = () => {
  return (
    <div className="add-button-and-video-container">
          
          <div className="video-content-contanier">

            
            <video autoPlay controls>
              <source src={one} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges.
            </p>
            
            <video autoPlay controls>
              <source src={two} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> An enchanted forest where mythical creatures come to life at night, interacting with the remnants of a lost civilization.
            </p>
            <video autoPlay controls>
              <source src={three} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>

            <video autoPlay controls>
              <source src={four} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>
            <video autoPlay controls>
              <source src={five} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A campfire burning with flames and embers, gradually increasing in size and intensity before dying down towards the end
            </p>
            
            <video autoPlay controls>
              <source src={chicken} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>
            <video autoPlay controls>
              <source src={church} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>

            <video autoPlay controls>
              <source src={churning} type="video/mp4" />
            </video>
            <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>
            



          </div>
          
        </div>
  )
}

export default Video_content