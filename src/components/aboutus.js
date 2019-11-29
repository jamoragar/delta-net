import React from 'react';
import cctv from '../img/cctv.jpg';
import fibra from '../img/fibra.jpg';
import network from '../img/network.jpg';

const AboutUs = () => {
    return (
        <section className='AboutUs'>
            <h2 className='heading'>Nosotros como Empresa</h2>
            <hr className='small center' />
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <div className="mision-vision">
                        <h3>Nuestra Misión</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae eius porro dolorem deserunt! Placeat animi totam ducimus? Quis accusantium, voluptas rerum ullam perferendis dignissimos aspernatur sit unde minima laboriosam!
                        </p>
                        <h3>Nuestra Visión</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus officia consequatur ducimus molestias ab, fugiat pariatur animi natus hic. Delectus quisquam facere distinctio eaque eos aut est tempora tempore!
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
    )
}

export default AboutUs;