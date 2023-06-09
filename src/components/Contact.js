import {useStart} from 'react';
import { Container } from "react-bootstrap";
import { Textarea } from 'react-bootstrap-icons';
import contactImg from "../assets/img/contact-img;svg";

export const Contact =() => {
    const formInitialDetails {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] - useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value  
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let responce = await fetch('http://localhost:5000/contact', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = responce.json();
    setFormDetails(formInitialDetails);
    if (result.code=200) {
        setStatus({success: true, message: 'Message sent successfully'});
        } else {{success: false, message: 'Something went wrong, please try again later'}}
    };


     return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-item-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us'/>
                    </Col>

                    <Col md={6}>
                        <h2> Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>  
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>  

                                <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                   </Col>

                                <Col sm={6} className='px-1'>
                                <input email="text" value={formDetails.lastName} placeholder="email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>   

                                <Col sm={6} className='px-1'>
                                <input type="tel" value={formDetails.lastName} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>  
                                <Col>
                                    <Textarea row="6" value={formDetails.message} placeholder='Message' onChange = {(e)=> onFormUpdate('message', e.target.value)} />
                                <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success' }>{status.message} </p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
     )
}