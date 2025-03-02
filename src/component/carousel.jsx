import AppComponent from './component';
import Markdown from 'react-markdown'
import carousel1Img from '../assets/images/carousel-1.png';


/**
 * 
 */
export default class CarouselComponent extends AppComponent {

    /**
     * Special constructor for base definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    name: 'Yhojann Aguilera Aguayo',
                    subtitle: '*Creando empresas y áreas con almas y pilares sólidos basados siempre en la **confianza**, **transparencia** y el **beneficio a las personas**.*',
                },
                en: {
                    name: 'Yhojann Aguilera Aguayo',
                    subtitle: '*Creating companies and areas with solid souls and pillars always based on **trust**, **transparency** and **benefit to people**.*',
                },
            },
            state: {},
        });
    }

    render() {
        return (
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <img src={carousel1Img} className="d-block w-100" alt="Image" />
                        <div className="position-absolute top-0 start-0 w-100 h-100">
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-md-6 offset-md-6 d-flex align-items-center h-100">
                                        <div>
                                            <h1 className="pb-3 mb-4 border-bottom border-secondary">
                                                {this.state.strings.name}
                                            </h1>
                                            <p className="lead">
                                                <Markdown
                                                    disallowedElements={[ 'p' ]}
                                                    unwrapDisallowed={true}>
                                                    {this.state.strings.subtitle}
                                                </Markdown>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}