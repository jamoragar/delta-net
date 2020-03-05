import React from 'react';
import cctv from '../img/cctv.jpg';
import fibra from '../img/fibra.jpg';
import network from '../img/network.jpg';

import Footer from './footer';

const AboutUs = (props) => {    
    let location;
    Object.keys(props).length === 0 ? location = '' : location = props.location.pathname;
    return (
        <div>
            <section className='AboutUs'>
                <h2 className='heading'>Nosotros como Empresa</h2>
                <hr className='small center' />
                <div className="row">
                    <div className="col-lg-7 col-sm-12">
                        <div className="mision-vision">
                            <h3>Nuestra Visión</h3>
                            <p className="paragraph">
                                El servicio integral, la calidad y dedicación son pilares fundamentales en nuestra empresa.
                                Somos una compañía dedicada a las telecomunicaciones, creada y pensada para laborar bajo las
                                condiciones que nuestros clientes requieren, debido a las diversas particularidades.
                                Estamos ubicados en instalaciones propias en la ciudad de Punta Arenas,
                                ofreciendo todo el que hacer que involucra desde el levantamiento, proyección, diseño
                                e ingeniería hasta la construcción, instalación y mantención de los servicios, relacionados 
                                con el área.
                                <br/>
                                Al ejercer y haber podido levantar proyectos en la región, demostramos que
                                con la gestión adecuada, todo es posible. Es por esto que un trabajo profesional es la base de
                                Delta Net, con encargados y trabajadores con años de experiencia a nivel nacional e internacional.
                            </p>
                            <h3>Nuestra Misión</h3>
                            <p className="paragraph">
                            Nuestra misión es ser un puente para las empresas y diversas instituciones, para que logren entablarse en todo el país. También, trabajamos para que las organizaciones alcancen la tecnología, que sus funciones necesitan, para dar un paso más en la efectividad laboral.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="composition">
                            <img src={fibra} alt="Delta Net Fibra" className="composition-photo photo1"/>
                            <img src={network} alt="Delta Net Servers" className="composition-photo photo2"/>
                            <img src={cctv} alt="Delta Net CCTV" className="composition-photo photo3"/>
                        </div>
                    </div>
                </div>
            </section>
            {location === '/Nosotros' ? <div><Footer /></div> : <></>}
        </div>
    )
}

export default AboutUs;