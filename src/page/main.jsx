import Markdown from 'react-markdown';
import FooterComponent from '../component/footer';
import AppComponent from '../component/component';
import CarouselComponent from '../component/carousel';
import trustShadowedImg from '../assets/images/trust-shadowed.jpg';


/**
 * 
 */
export default class MainPage extends AppComponent {

    /**
     * Page route.
     */
    static route = /^\/$/;

    /**
     * Special constructor for base PageComponent definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    seeMore: 'Leer más',
                    experience: {
                        title: 'Más de 25 años de experiencia',
                        body: `
**Desde 1998**, Evangelista de Seguridad Informática Ética, expositor,
Co-Administrador de
[Elhacker.NET](https://foro.elhacker.net/profiles/whk-u148268.html),
[Underc0de.org](https://underc0de.org/foro/index.php?action=profile;u=20051)
y Co-Fundador de
[DrawCoders](https://drawcoders.com/),
[Oznet Cybersecurity](https://oznet.cl/),
[DevelROX Cybersecurity](https://develrox.com/),
[Bugbounty Chile](https://bugbounty.cl/),
[Comunicaciones Ruta102](https://ruta102.cl/) y
**actual Gerente de Mercado** en [Insidesecurity](https://insidesecurity.cl/).
                        `
                    },
                    trust: {
                        title: 'La confianza es un pilar fundamental en la vida y también en los negocios',
                        body: `
Una persona sin valores no tiene una reputación, y **una empresa sin ética no
tiene alma**. Creando empresas y áreas con almas y pilares sólidos basados
siempre en la confianza, transparencia y el **beneficio a las personas**.
                        `
                    }
                },
                en: {
                    seeMore: 'See more',
                    experience: {
                        title: 'More than 25 years of experience',
                        body: `
**From 1998**, Ethical Computer Security Evangelist, speaker,
Co-Administrator of
[Elhacker.NET](https://foro.elhacker.net/profiles/whk-u148268.html),
[Underc0de.org](https://underc0de.org/foro/index.php?action=profile;u=20051)
and Co-Founder of
[DrawCoders](https://drawcoders.com/),
[Oznet Cybersecurity](https://oznet.cl/),
[DevelROX Cybersecurity](https://develrox.com/),
[Bugbounty Chile](https://bugbounty.cl/),
[Ruta102 Communications](https://ruta102.cl/) and
**current Market Manager** at [Insidesecurity](https://insidesecurity.cl/).
                        `
                    },
                    trust: {
                        title: 'Trust is a fundamental pillar in life and also in business',
                        body: `
A person without values does not have a reputation, and **a company without ethics does not
It has soul**. Creating companies and areas with souls and solid pillars based
always in trust, transparency and **benefit to people**.
                        `
                    }
                },
            },
            state: {},
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vw-100 min-vh-100">
                
                <CarouselComponent
                    language={this.props.language} />

                <div className="flex-fill">
                    <div className="container py-5">
                        <div className="py-5 text-center">
                            <h2 className="mb-4 fw-bold">
                                {this.state.strings.experience.title}
                            </h2>
                            <p className="mb-5">
                                <Markdown
                                    disallowedElements={[ 'p' ]}
                                    unwrapDisallowed={true}>
                                    {this.state.strings.experience.body}
                                </Markdown>
                            </p>
                            <a className="btn btn-secondary px-5"
                                href="/experience">{this.state.strings.seeMore}</a>
                        </div>
                    </div>

                    <div className="text-white bg-dark py-5" style={{
                        backgroundImage: `url(${trustShadowedImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'fixed',
                        textShadow: '1px 1px 0 #222'
                    }}>
                        <div className="container py-5 text-center">
                            <h2 className="mb-4 fw-bold">
                                {this.state.strings.trust.title}
                            </h2>
                            <p className="mb-0">
                                <Markdown
                                    disallowedElements={[ 'p' ]}
                                    unwrapDisallowed={true}>
                                    {this.state.strings.trust.body}
                                </Markdown>
                            </p>
                        </div>
                    </div>
                </div>

                <FooterComponent
                    language={this.props.language}
                    appEvents={this.props.appEvents} />
            </div>
        );
    }
}