import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { Container, Row, Col } from "react-bootstrap";
import ExcelMeter from '../assets/img/ExcelMeter.PNG';
import SqlMeter from '../assets/img/SqlMeter.PNG';
import PythonMeter from '../assets/img/PythonMeter.PNG';
import PowerMeter from '../assets/img/PowerMeter.PNG';
import WebMeter from '../assets/img/WebMeter.PNG';
import colorSharp from '../assets/img/color-sharp.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Sql from  '../assets/img/sql-server.png';
import Excel from  '../assets/img/excel.png';
import Python from  '../assets/img/python.png';
import Power from  '../assets/img/power-bi.png';
import Web from '../assets/img/coding.png';
import Javascript from '../assets/img/js.png';

export const Skills = () => {

  const percentage = 66;

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">


                       
                            <h2>Skills</h2>
                            
                            <p>As we know data is the sword of the twenty-first century, and those who wield it well is the samurai.<br></br> I keep honing my tools. </p>
                        
                            
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div  className="item">
                                    <img src={Excel} alt="Image" />
                                    {/* <div style={{ width: 100, height: 100}}> */}
                                  {/* <CircularProgressbar   value={percentage} text={`${percentage}%`} /> */}
                                    {/* </div> */}
                                    
                                    
                                    <h5>Excel/VBA</h5>
                                </div>
                                <div className="item">
                                    <img src={Sql} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={Power} alt="Image" />
                                    <h5>Power BI</h5>
                                </div>
                                <div className="item">
                                    <img src={Web} alt="Image" />
                                    <h5>Web development</h5>
                                </div>

                                <div className="item">
                                    <img src={Javascript} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
                 </section>
        
      )
      
    }

    