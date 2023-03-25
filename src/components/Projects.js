import { Container, Tab, TabContainer, Row, Nav, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import Drums from '../assets/img/D.jpg';
import Simon from '../assets/img/Simon.PNG';
import TicTacToe from '../assets/img/TicTacToe.PNG';
import Keeper from '../assets/img/Keeper.PNG';
import ToDo from '../assets/img/ToDo.PNG';
import Website from '../assets/img/man1.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const projects = [
        {
        title: "Drum Kit",
        description: "Simiple application just for fun",
        imgUrl: Drums,
        url:"https://aidarshafeev.github.io/drumKit/"
        
        },

        {
        title: "Simon game",
        description: "Follow pattern offered by the game to win",
        imgUrl: Simon,
        url:"https://aidarshafeev.github.io/SimonGame/"
        },
        
            
        {
        title: "Tic Tac Toe game",
        description: "Well-known game made with React.js ",
        imgUrl: TicTacToe,
        url:"https://aidarshafeev.github.io/tic-tac-toe-app/"
        },
         
        
         {
         title: "Keeper App",
         description: "Simple app to keep your notes",
         imgUrl: Keeper,
         url:"https://aidarshafeev.github.io/keeper-app/"
         },


        {
        title: "To Do App",
         description: "An app to keep track of daily tasks",
        imgUrl: ToDo,
        url:"https://aidarshafeev.github.io/to-do-app/"
        },

        
         {
         title: "My portfolio website",
         description: "React.js-based personal website",
         imgUrl: Website,
         url:"#home"
        },

    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                <Col>
                {/* <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}

                   <h2>My web apps</h2>
                    <p>Web development is my hobby. Visit some of my web apps following links below.</p>
                    {/* </div>}
                    </TrackVisibility> */}
                    <TabContainer id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item> 
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane> 
                    
                    <Tab.Pane eventKey='second'>Loren ipsum</Tab.Pane>
                    <Tab.Pane eventKey='second'>Loren ipsum</Tab.Pane>
                  </Tab.Content>
                  </TabContainer>
                    
                    </Col>
                </Row>
            </Container>
            
        </section>

    )

} 