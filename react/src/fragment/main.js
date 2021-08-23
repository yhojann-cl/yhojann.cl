import React, { Component } from 'react';
import './style.css';


export default (class MainFragment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <main>
                    <div className="p-3 p-md-5 m-md-3 text-center">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4">
                                M&aacute;s de 20 a&ntilde;os
                            </h1>
                            <p className="lead">
                                 de experiencia como Evangelista de
                                Seguridad &Eacute;tica, expositor y actual Director de
                                tecnolog&iacute;a y Co-Fundador de DevelR0X Chile.
                            </p>
                        </div>
                    </div>
                    <div id="trust" className="p-3 p-md-5 text-white bg-dark text-center">
                        <div className="container p-lg-5 my-5">

                            <p className="display-6 mb-5">
                                La confianza es un pilar fundamental en la vida
                                y tambi&eacute;n en los negocios
                            </p>
                            <p className="lead mb-2">
                                Una persona sin valores no tiene una reputaci&oacute;n,
                                y una empresa sin &eacute;tica no tiene alma.
                            </p>
                            <p className="lead mb-0">
                                Creando empresas y &aacute;reas con almas y pilares
                                s&oacute;lidos basados siempre en la confianza,
                                transparencia y el beneficio a las personas.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
});
