import React, {useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Footer from './footer';
import axios from 'axios';

const API_PATH = 'http://www.deltanet.cl/api/contact_form/form_submit.php';


const Contact = (props) => {
    
    const [btnText, setBtnText] = useState(false);
    const [emailSended, setEmailSended] = useState(false);
    
    let location;
    Object.keys(props).length === 0 ? location = '' : location = props.location.pathname;

    const ContactFormJSX = () => {
        return(
            <div>
                <div className='Contacto' style={location === '/Contacto' ? {padding: '5rem 0 2rem 0'} : null}>
                    {location === '/Contacto' ? (
                    <div>
                        <h2>Contactanos!</h2>
                        <span>Resolveremos tus inquietudes a la brevedad.</span>
                    </div>
                    )
                    :
                    <></>}
                    
                    <section className='section-bta'>
                        <form onSubmit={submitForm}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" name='txt_name' placeholder="Ingrese su Nombre" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" name='txt_email' placeholder="Ingrese su E-mail" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea className="form-control" name='area_message' placeholder="Ingrese su Mensaje" required/>
                            </div>
                            <button type="submit" className="btn btn-success btn-block">
                                {btnText ? <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />: 'Enviar'}
                            </button>
                        </form>
                    </section>
                </div>
                {location === '/Contacto' ? <div className='services_footer'><Footer /></div> : <></>}
            </div>
        )
    }
    const MailSentedJSX = () => {
        if(location === '/Contacto'){
            setTimeout(() => {
                props.history.push('/')
            }, 3500);
        }
        return(
            <div>
                <div className='Contacto' style={location === '/Contacto' ? {padding: '5rem 0 2rem 0'} : null}>
                    <h2 className='tracking-in-expand-fwd'>Email enviado correctamente.</h2>
                </div>
            </div>
        )
    }
    

    const submitForm = event => {
        event.preventDefault();
    
        setBtnText(true);
    
        const formData = {
            name: event.target.elements.txt_name.value,
            email: event.target.elements.txt_email.value,
            message: event.target.elements.area_message.value
        }
    
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: formData
        }).then(result => {
    
            setBtnText(false);
            setEmailSended(true);
        })
    }

    return (
        <div>
            {emailSended ? <MailSentedJSX /> : <ContactFormJSX />}
        </div>
    )
}


export default Contact;