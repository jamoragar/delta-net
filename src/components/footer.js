import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="container small">
                <div className="row">
                    <div className="col-md-12 py-2">
                        <div className="mb-4 flex-center">
                            <hr/>
                            <br/>
                            <p>DELTA NET</p>
                            <a href="mailto:joyarzo@deltanet.cl"><p>joyarzo@deltanet.cl</p></a>
                            <p>(+56 9) 9381 1278</p>
                            <p>Punta Arenas, Chile</p>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-12 ">
							<div className="text-center text-white">
								&copy; 2020 DELTA NET. Todos los derechos reservados.
                                <div id="pie">Desarrollado por <a href='https://www.smartapps.cl/' target='_blank' rel="noopener noreferrer"> SmartApps</a></div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Footer;