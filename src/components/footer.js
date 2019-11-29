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
                            <p>(+56 9) 9381 1278</p>
                            <p>Punta Arenas</p>
                            <p>Chile</p>
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