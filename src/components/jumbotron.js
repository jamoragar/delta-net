import React from 'react';
import {Button} from 'react-bootstrap';
const HomeJumbotron = () => {
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
                                <Button className="heroButton btn-lg" variant="primary">
                                    <i className="fas fa-phone"></i>
                                    Quiero Saber Más
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeJumbotron;