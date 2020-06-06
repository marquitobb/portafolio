import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
//const image = "https://image.freepik.com/free-psd/cv-mock-up-white-background_23-2148363842.jpg"
const image = "https://craft-cv.com/image/es/6/curriculum-vitae-plantilla.png"

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

class Cv extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        
      }
    }

    picale = () =>{
      try {
        const url = "https://firebasestorage.googleapis.com/v0/b/deploy-react-8cb9c.appspot.com/o/cv%2FCv.pdf?alt=media&token=1e99492c-e6ef-440a-9a38-5de5cfb9e3b2"
        //window.open(`${url}`)
        var win = window.open(`${url}`,'_blank')
        win.focus();
      } catch (error) {
          console.log(error);
      }
    }
            
    render() {
      return (
        <section style={sectionStyle} className="resume-section p-3 p-lg-5 d-flex align-items-center justify-content-center" id="cv">          
          <button onClick={() => this.picale()} type="button" className="btn btn-warning btn-lg">
            <FontAwesomeIcon icon={faDownload} color="black" />
            <span> descargar CV</span>
          </button>  
        </section>
      )    
    }
}

export default Cv;