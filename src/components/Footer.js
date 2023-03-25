import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github-mark-white.svg'


export const Footer =() => {
     return (
        <footer className='footer'>
<Container>
<Row className='align-item-center'>

<Col sm={6}>
<h2> a-shafeev@mail.ru</h2>
</Col>

<Col sm={6} className='text-center text-sm-end'>
        <div className='social-icon'>
            <a href ="https://www.linkedin.com/in/aidar-shafeev/"><img src={navIcon1}/></a> 
            <a href="https://github.com/AidarShafeev/"><img src={github} alt=""/></a>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
</Col>
</Row>
</Container>

        </footer>
     )
}