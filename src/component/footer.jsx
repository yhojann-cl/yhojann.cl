import AppComponent from './component';


/**
 * 
 */
export default class FooterComponent extends AppComponent {

    /**
     * Special constructor for base definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    name: 'Yhojann Aguilera Aguayo.',
                    location: 'Santiago de Chile, {year}.',
                    linkedin: 'Linkedin',
                    language: {
                        current: 'ES',
                        options: {
                            spanish: 'Español',
                            english: 'English',
                        }
                    }
                },
                en: {
                    name: 'Yhojann Aguilera Aguayo.',
                    location: 'Santiago of Chile, {year}.',
                    linkedin: 'Linkedin',
                    language: {
                        current: 'EN',
                        options: {
                            spanish: 'Español',
                            english: 'English',
                        }
                    }
                },
            },
            state: { }
        });
    }

    render() {
        return (
            <div className="container py-5">
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-muted fw-light">
                            {this.state.strings.name}
                        </h4>
                        <p className="text-muted mb-0">
                            <i>{this.state.strings.location.replace('{year}', (new Date()).getFullYear())}</i>
                        </p>
                    </div>
                    <div className="col-md-6 text-end">
                        <a className="btn btn-sm btn-outline-secondary me-2"
                            href="https://www.linkedin.com/in/yhojann-aguilera/"
                            target="_blank" rel="noreferrer">
                            <i className="bi bi-linkedin me-2"></i>
                            {this.state.strings.linkedin}
                        </a>
                        <span class="dropdown">
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <i className="bi bi-globe-americas me-2"></i>
                                {this.state.strings.language.current}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <button
                                        onClick={() => this.props.appEvents.setLanguage('es')}
                                        className="dropdown-item">
                                        {this.state.strings.language.options.spanish}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => this.props.appEvents.setLanguage('en')}
                                        className="dropdown-item">
                                        {this.state.strings.language.options.english}
                                    </button>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}