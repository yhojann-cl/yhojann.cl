import { Component } from 'react';
import Markdown from 'react-markdown'
import CarouselComponent from '../components/carousel';
import FooterComponent from '../components/footer';
import trustShadowedImg from '../assets/images/trust-shadowed.jpg';

class MainPage extends Component {

    static route = /^\/$/;
    static strings = {
        es: {
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
    }

    constructor(props) {
        super(props);

        this.state = {
            strings: MainPage.strings.en
        }
    }

    componentDidMount() {
        this.setState({
            strings: MainPage.strings.hasOwnProperty(this.props.language) ?
                MainPage.strings[this.props.language] :
                MainPage.strings.en
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vw-100 min-vh-100">
                <CarouselComponent language={this.props.language} />

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
                            <a className="btn btn-secondary px-5" href="#/experience">Leer mas</a>
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

                <FooterComponent language={this.props.language} />
            </div>
        );
    }
}

export default MainPage;
