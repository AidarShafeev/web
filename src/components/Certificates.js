import Carousel from 'react-bootstrap/Carousel';
import advancedSQL from '../assets/img/advancedSQL.png';
import Python from '../assets/img/pythonData.jpeg';
import BI from '../assets/img/BI.png';
import pythonFoundations from '../assets/img/pythonFoundations.png';
import goPractice from '../assets/img/gopractice.jpeg';
import IELTS from '../assets/img/IELTS.PNG';
import SQLHabit from '../assets/img/SQLhabit.PNG';

export const Certificates = () => { 

    
    return (
        <section className='certificate' id='certificate'>
            <h2>My certificates</h2>
                    
        <Carousel indicators={false}>
          <Carousel.Item>
          
            <img
              className="d-block w-50"
              src={advancedSQL}
              alt="SQL"
            />
            <Carousel.Caption>
              {/* <h3>SQL</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

             



          <Carousel.Item>
            <img
              className="d-block w-50"
              src={pythonFoundations}
              alt="Fourth slide"
            />
    
            <Carousel.Caption>
              {/* <h3>PythonFoundations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-50"
              src={Python}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              {/* <h3>Python</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-50"
              src={BI}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              {/* <h3>Python</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-50"
              src={goPractice}
              alt="Fifth slide"
            />
    
            <Carousel.Caption>
              {/* <h3>GoPractice</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
          
          <img
            className="d-block w-50"
            src={SQLHabit}
            alt="SQLHabit"
          />
          <Carousel.Caption>
            {/* <h3>SQL</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        

          <Carousel.Item>
            <img
              className="d-block w-50"
              src={IELTS}
              alt="Sixth slide"
            />
    
            <Carousel.Caption>
                </Carousel.Caption>
          </Carousel.Item> 
        


        </Carousel>

        
        </section>
      );
}
