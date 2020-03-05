import React from 'react';

import Footer from './footer';

const Services = (props) => {
    let location;
    Object.keys(props).length === 0 ? location = '' : location = props.location.pathname;
    const refran = '{ Revolucionamos la forma en la que nuestros clientes se conectan. }'
    return (
        <div>
            <div className='Services'>
                <section className='section-bta'>
                    <div className="row">
                        <div className='col-lg-12 col-sm-12'>
                            <h2 className='text-center'>
                                Conoce nuestros 
                                <span className='primary-color'> Servicios</span>
                            </h2>
                            <hr className='small center' />
                        </div>
                    </div>
                    <section>
                        <p>Delta Net pone a disposición sus servicios. Con amplia experiencia y una serie de proyectos realizados.</p>
                        <div className="services-grid">
                            <div className="service service1">
                                <i className="far fa-lightbulb"></i>
                                <h4>Fibra Óptica</h4>
                                <p>Instalaciónes, fusiones y certificaciones de fibra óptica. En todo tipo de estructuras.</p>
                            </div>
                            <div className="service service2">
                                <i className="fas fa-ethernet"></i>
                                <h4>Cableado</h4>
                                <p>Instalación de cableado estructurado en categoría 5, 6 y 7.</p>
                            </div>
                            <div className="service service3">
                                <i className="fas fa-fire-extinguisher"></i>
                                <h4>Redes de Incendio</h4>
                                <p>Instalación de redes de incendio, sistemas de alarmas y avisos según necesidad.</p>
                            </div>
                        </div>
                        <div className="services-grid">
                            <div className="service service4">
                                <i className="fas fa-video"></i>
                                <h4>CCTV</h4>
                                <p>Sistemas de televigilancia, visualice su negocio 24/7 con tecnologías IP o Análogo.</p>
                            </div>
                            <div className="service service5">
                                <i className="fas fa-server"></i>
                                <h4>Servidores Linux/Windows</h4>
                                <p>Implementación de servidores, Firewall, Proxy, Telefonía, Active Directory u otros.</p>
                            </div>
                            <div className="service service6">
                                <i className="fas fa-satellite-dish"></i>
                                <h4>Telemetría</h4>
                                <p>Reciba y envie información sin importar la distancia. Expertos es telecomunicaciones.</p>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <p className="refran title-alternative">{refran}</p>
                </section>
            </div>
            {location === '/Servicios' ?  <div><Footer /></div> : <></> }
        </div>
    )
}

export default Services;