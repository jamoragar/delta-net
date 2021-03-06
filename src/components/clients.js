import React from 'react';
import axis from '../img/axis.jpg';
import salfa from '../img/salfa.jpg'
import dgac from '../img/dgac.png'
import gasco from '../img/gasco_magallanes.png'
import vilicic from '../img/vilicic.png'
import oviedo from '../img/oviedo.png';
import aguas_magallanes from '../img/aguas_magallanes.png'

const Clients = () => {
    return (
        <div className="Clients">
            <div className="section-bta">
                <h2 className="text-center">Algunos de los <span className='primary-color'>Clientes</span> que han confiado en Delta Net</h2>
                <hr className='small center' />
                <br/><br/>
                <div className="card-columns">
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={axis} alt="Cliente Axis" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={salfa} alt="Cliente Salfa" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={dgac} alt="Cliente Aeronautica Civil" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={gasco} alt="Cliente Gasco" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={vilicic} alt="Cliente Vilicic" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={oviedo} alt="Cliente Oviedo" width="85%" />
                        </p>
                    </div>
                    <div className="card m-3 pl-5 pr-5 border-0">
                        <p className="text-center">
                            <img className="client" src={aguas_magallanes} alt="Cliente Aguas Magallanes" width="85%" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;