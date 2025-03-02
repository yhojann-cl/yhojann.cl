import HeaderComponent from '../component/header';
import FooterComponent from '../component/footer';
import AppComponent from '../component/component';


/**
 * 
 */
export default class ExperiencePage extends AppComponent {

    /**
     * Page route.
     */
    static route = /^\/experience$/;

    /**
     * Special constructor for base PageComponent definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    title: 'Mi experiencia laboral',
                    seeMore: '...ver mas',
                    periodTo: 'al',
                    periodCurrent: 'a la fecha',
                    experience: [
                        {
                            company: 'Inside Security SpA.',
                            period: { from: 2022, to: null },
                            positions: {
                                main: 'Gerente Mercado',
                                all: [
                                    'Gerente Mercado.',
                                    'Jefe de Operaciones de Fábrica Aplicativa.',
                                    'Consultor en optimización de procesos corporativos.',
                                    'Consultor FullStack Senior, Ciberseguridad, Infraestructura, Arquitectura y Desarrollo de Software. Red Team, Blue Team & Yellow Team.',
                                    'Experiencia en el proceso de lineamientos de ciberseguridad para áreas de arquitectura tecnológica y de ciberseguridad de Banco de Chile.',
                                ]
                            }
                        },
                        {
                            company: 'DevelR0X SpA.',
                            period: { from: 2020, to: 2022 },
                            positions: {
                                main: 'Co-Fundador',
                                all: [
                                    'Director de Tecnología',
                                    'Encargado de proyecto, I+D.',
                                    'Encargado de área de Ciberseguridad Hacking Ético.',
                                    'Desarrollador de Aplicaciones',
                                    'Experiencia con distintas entidades financieras y de alta criticidad en Chile tales como Banco BCI, Pentavida, Ripley y Esmax entre otros.',
                                    'Optimización de procesos corporativos.',
                                ]
                            }
                        },
                        {
                            company: 'Inside Security SpA.',
                            period: { from: 2019, to: 2019 },
                            positions: {
                                main: 'Consultor y Auditor de Arquitectura y Seguridad Aplicativa',
                                all: [
                                    'Analista de Seguridad Aplicativa y de Arquitectura para Entel Chile.',
                                    'Relator de Seguridad y capacitaciones.',
                                ]
                            }
                        },
                        {
                            company: 'Oznet SpA.',
                            period: { from: 2016, to: 2019 },
                            positions: {
                                main: 'Co-Fundador',
                                all: [
                                    'Director de tecnología.',
                                    'Encargado de proyecto, I+D.',
                                    'Encargado de área de Ciberseguridad Hacking Ético.',
                                    'Desarrollador de Aplicaciones, encargado de proyectos tales cómo la fabricación de un Firewall Web (WAF), un sistema de campañas masivas de entrenamiento de Phishing ético y similares.',
                                    'Auditor de Ethical Hacking para clientes bancarios, sistemas transaccionales y análisis de arquitectura de Software para empresas de alta criticidad como Banco BCI, Banco Ripley, Cencosud, Copec, Falabella, Ministerio de Salud, Subsecretaria Prevención del delito, entre otros.',
                                ]
                            }
                        },
                        {
                            company: 'Bosch S.A.',
                            period: { from: 2015, to: 2016 },
                            positions: {
                                main: 'Líder de Desarrollo de Software Seguro',
                                all: [
                                    'Encargado de proyecto.',
                                    'Desarrollador de Software WEB, lider de desarrollo de la plataforma Bosch Contact Center.',
                                    'QA y Auditor de Hacking Ético.',
                                ]
                            }
                        },
                        {
                            company: 'Docbook SpA.',
                            period: { from: 2014, to: 2015 },
                            positions: {
                                main: 'Director de tecnología',
                                all: [
                                    'Encargado de proyecto, I+D.',
                                    'Desarrollador de Software WEB.',
                                    'Diseñador Gráfico.',
                                    'QA y Auditor de Hacking Ético.',
                                    'Experiencia en el desarrollo de soluciones médicas transaccionales y analíticas.',
                                ]
                            }
                        },
                        {
                            company: 'Servibanca.',
                            period: { from: 2013, to: 2014 },
                            positions: {
                                main: 'Líder de Desarrollo de Software Seguro',
                                all: [
                                    'Desarrollador de Software.',
                                    'Diseñador Gráfico.',
                                    'Auditor de Hacking Ético.',
                                    'Evangelista y docente. Experiencia en capacitación al equipo de desarrollo de Servibanca sobre normas ISO, Desarrollo de Software Seguro sobre .NET C#',
                                    'Experiencia con clientes bancarios como Banco Estado y Banco de Chile en la construcción de plataformas de pago transaccionales en lenguaje .NET C#.'
                                ]
                            }
                        },
                        {
                            company: 'Despega SpA.',
                            period: { from: 2011, to: 2013 },
                            positions: {
                                main: 'Encargado de proyecto',
                                all: [
                                    'Encargado de proyecto.',
                                    'Desarrollador de Software WEB (PHP VBulletin & Wordpress).',
                                    'Diseñador Gráfico.',
                                    'QA y Auditor de Hacking Ético.',
                                    'Experiencia con clientes de Minería como Tecnipak para la fabricación de plataformas de gestión.',
                                ]
                            }
                        },
                        {
                            company: 'Idati Technologies Ltda.',
                            period: { from: 2011, to: 2011 },
                            positions: {
                                main: 'Co-Fundador',
                                all: [
                                    'Desarrollador de Software WEB (PHP & .NET C#).',
                                    'Diseñador Gráfico.',
                                    'Consultor de Hacking Ético.',
                                ]
                            }
                        },
                        {
                            company: 'Betalian S.A.',
                            period: { from: 2010, to: 2010 },
                            positions: {
                                main: 'Desarrollador de Software Móvil',
                                all: [
                                    'Desarrollador de Software para tablets sobre Android SDK Nativo en Betalian S.A.',
                                ]
                            }
                        },
                        {
                            company: 'Drawcoders SpA.',
                            period: { from: 2008, to: 2016 },
                            positions: {
                                main: 'Co-Fundador',
                                all: [
                                    'Cofundador.',
                                    'Desarrollador de Software.',
                                    'Diseñador gráfico.',
                                    'Consultor de Hacking Ético.',
                                ]
                            }
                        },
                    ],
                },
                en: {
                    title: 'My work experience',
                    seeMore: '...see more',
                    periodTo: 'to',
                    periodCurrent: 'to the date',
                    experience: [
                        {
                            company: 'Inside Security SpA.',
                            period: { from: 2022, to: null },
                            positions: {
                                main: 'Market Manager',
                                all: [
                                    'Market Manager.',
                                    'Head of Application Factory Operations.',
                                    'Consultant in optimization of corporate processes.',
                                    'Senior FullStack Consultant, Cybersecurity, Infrastructure, Architecture and Software Development. Red Team, Blue Team & Yellow Team.',
                                    'Experience in the process of cybersecurity guidelines for technological architecture and cybersecurity areas of Banco de Chile.',
                                ]
                            }
                        },
                        {
                            company: 'DevelR0X SpA.',
                            period: { from: 2020, to: 2022 },
                            positions: {
                                main: 'Co-Founder',
                                all: [
                                    'Director of Technology',
                                    'Project manager, R&D.',
                                    'Head of Cybersecurity Ethical Hacking area.',
                                    'Application developer',
                                    'Experience with different financial and highly critical entities in Chile such as Banco BCI, Pentavida, Ripley and Esmax among others.',
                                    'Optimization of corporate processes.',
                                ]
                            }
                        },
                        {
                            company: 'Inside Security SpA.',
                            period: { from: 2019, to: 2019 },
                            positions: {
                                main: 'Consultant and Auditor of Architecture and Application Security',
                                all: [
                                    'Application and Architecture Security Analyst for Entel Chile.',
                                    'Safety and training rapporteur.',
                                ]
                            }
                        },
                        {
                            company: 'Oznet SpA.',
                            period: { from: 2016, to: 2019 },
                            positions: {
                                main: 'Co-Founder',
                                all: [
                                    'Chief Technology Officer',
                                    'Project manager, R&D.',
                                    'Head of Cybersecurity Ethical Hacking area.',
                                    'Application Developer, in charge of projects such as the manufacture of a Web Firewall (WAF), a system of massive ethical Phishing training campaigns and similar.',
                                    'Ethical Hacking Auditor for banking clients, transactional systems and Software architecture analysis for highly critical companies such as BCI Bank, Ripley Bank, Cencosud, Copec, Falabella, Ministry of Health, Undersecretary of Crime Prevention, among others.',
                                ]
                            }
                        },
                        {
                            company: 'Bosch S.A.',
                            period: { from: 2015, to: 2016 },
                            positions: {
                                main: 'Secure Software Development Leader',
                                all: [
                                    'Project manager.',
                                    'WEB Software Developer, development leader of the Bosch Contact Center platform.',
                                    'QA and Ethical Hacking Auditor.',
                                ]
                            }
                        },
                        {
                            company: 'Docbook SpA.',
                            period: { from: 2014, to: 2015 },
                            positions: {
                                main: 'Chief Technology Officer',
                                all: [
                                    'Project manager, R&D.',
                                    'WEB Software Developer.',
                                    'Graphic designer.',
                                    'QA and Ethical Hacking Auditor.',
                                    'Experience in developing transactional and analytical medical solutions.',
                                ]
                            }
                        },
                        {
                            company: 'Servibanca.',
                            period: { from: 2013, to: 2014 },
                            positions: {
                                main: 'Secure Software Development Leader',
                                all: [
                                    'Software developer.',
                                    'Graphic designer.',
                                    'Ethical Hacking Auditor.',
                                    'Evangelist and teacher. Experience in training the Servibanca development team on ISO standards, Secure Software Development on .NET C#',
                                    'Experience with banking clients such as Banco Estado and Banco de Chile in the construction of transactional payment platforms in .NET C# language.'
                                ]
                            }
                        },
                        {
                            company: 'Despega SpA.',
                            period: { from: 2011, to: 2013 },
                            positions: {
                                main: 'Project manager',
                                all: [
                                    'WEB Software Developer (PHP VBulletin & Wordpress).',
                                    'Graphic designer.',
                                    'QA and Ethical Hacking Auditor.',
                                    'Experience with Mining clients such as Tecnipak for the manufacture of management platforms.',
                                ]
                            }
                        },
                        {
                            company: 'Idati Technologies Ltda.',
                            period: { from: 2011, to: 2011 },
                            positions: {
                                main: 'Co-Founder',
                                all: [
                                    'WEB Software Developer (PHP & .NET C#).',
                                    'Graphic designer.',
                                    'Ethical Hacking Consultant.',
                                ]
                            }
                        },
                        {
                            company: 'Betalian S.A.',
                            period: { from: 2010, to: 2010 },
                            positions: {
                                main: 'Mobile Software Developer',
                                all: [
                                    'Software Developer for tablets on Native Android SDK at Betalian S.A.',
                                ]
                            }
                        },
                        {
                            company: 'Drawcoders SpA.',
                            period: { from: 2008, to: 2016 },
                            positions: {
                                main: 'Co-Founder',
                                all: [
                                    'Software developer.',
                                    'Graphic designer.',
                                    'Ethical Hacking Consultant.',
                                ]
                            }
                        },
                    ]
                },
            },
            state: {},
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vw-100 min-vh-100">
                
                <HeaderComponent
                    language={this.props.language}
                    appEvents={this.props.appEvents} />

                <div className="flex-fill">
                    <div className="container">

                        <h3 className="mb-4">{this.state.strings.title}</h3>

                        <div className="accordion">
                            {this.state.strings.experience.map((experience, experienceIndex) => (
                                <div
                                    className="accordion-item"
                                    key={`experience-company-${experienceIndex}`}>
                                    <div className="accordion-header">
                                        <button
                                            className={`accordion-button d-block position-relative ${(experienceIndex === 0) ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#experience-company-${experienceIndex}`}>
                                            <p className="mb-0 fw-bold">
                                                {experience.positions.main}
                                            </p>
                                            <p className="mb-0">
                                                {experience.company}
                                            </p>
                                            <p className="mb-0 text-muted"><small>
                                                {experience.period.to ? (
                                                    <span>
                                                        {experience.period.from}&nbsp;
                                                        {this.state.strings.periodTo}&nbsp;
                                                        {experience.period.to}
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {experience.period.from}&nbsp;
                                                        {this.state.strings.periodCurrent}
                                                    </span>
                                                )}.
                                            </small></p>
                                            <p className="mb-0 text-muted position-absolute end-0 bottom-0 p-3">
                                                <small>{this.state.strings.seeMore}</small>
                                            </p>
                                        </button>
                                    </div>
                                    <div className={`accordion-collapse collapse ${(experienceIndex === 0) ? 'show' : ''}`} id={`experience-company-${experienceIndex}`}>
                                        <div className="accordion-body">
                                            <ul>
                                                {experience.positions.all.map((position, positionIndex) => (
                                                    <li key={`experience-company-${experienceIndex}-position-${positionIndex}`}>
                                                        {position}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <FooterComponent
                    language={this.props.language}
                    appEvents={this.props.appEvents} />
            </div>
        )
    }
}