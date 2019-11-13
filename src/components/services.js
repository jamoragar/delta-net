import React from 'react';

const Services = () => {
    const refran = '{ Revolucionamos la forma en la que Magallanes se conecta. }'
    return (
        <div className='Services'>
            <section className='section-bta'>
                <div className="row">
                    <div className='col-lg-offset-1 col-lg-10 col-sm-offset-1 col-sm-10'>
                        <h2 className='text-center'>
                            Conoce nuestros 
                            <span className='primary-color'> Servicios</span>
                        </h2>
                        <hr className='small center' />
                    </div>
                </div>
                <p class="refran title-alternative">{refran}</p>
            </section>
        </div>
    )
}

export default Services;