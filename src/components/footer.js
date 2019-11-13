import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small cyan darken-3">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 py-2">
                            <div className="mb-4 flex-center">
                                <br/>
                                <h3>Contáctanos</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-12 ">
							<div className="text-center text-white">
								&copy; 2019 DELTA NET. Todos los derechos reservados.
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Footer;