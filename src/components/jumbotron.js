import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

import Contact from './contact';

const ContactFormModal = (props) => {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Háblanos!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Contact />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}

const HomeJumbotron = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="container" id="wrapper">
                    <div className="row">
                        <div className="col-lg-10 col-md-10">
                            <h1>Deja tu proyecto en manos de Delta net</h1>
                            <p>
                                Años de experiencia brindando servicios
                                integrales en Telecomunicaciones, Electrónica
                                e Informática.
                            </p>
                            <br/>
                            <p>
                                <Button className="heroButton btn-lg" variant="primary" onClick={() =>{
                                    setModalShow(true);
                                }}>
                                    <i className="fas fa-phone"></i>
                                    Quiero Saber Más
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        
    )
}

export default HomeJumbotron;