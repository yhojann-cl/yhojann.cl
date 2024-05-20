import { Component } from 'react';
import logoImg from '../assets/images/logo.png';

class NavBarComponent extends Component {

    static strings = {
        es: {
            nav: {
                current: 'ES',
                language: {
                    spanish: 'Español',
                    english: 'English',
                }
            }
        },
        en: {
            nav: {
                current: 'EN',
                language: {
                    spanish: 'Español',
                    english: 'English',
                }
            }
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            strings: NavBarComponent.strings.en
        }
    }

    componentDidMount() {
        this.setState({
            strings: NavBarComponent.strings.hasOwnProperty(this.props.language) ?
                NavBarComponent.strings[this.props.language] :
                NavBarComponent.strings.en
        });
    }

    async setLanguage(language) {
        localStorage.setItem('language', language);
        window.location.reload();
    }

    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#/">
                            <img src={logoImg} style={{ maxHeight: '32px' }} />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                {/*
                                <li class="nav-item">
                                    <a class="nav-link active" href="#/">Link 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/">Link 2</a>
                                </li>
                                */}
                            </ul>
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown" data-bs-theme="dark">
                                    <button className="nav-link px-3 dropdown-toggle" data-bs-toggle="dropdown">
                                        <span className="me-2">{this.state.strings.nav.current}</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button
                                                onMouseDown={() => this.setLanguage('es')}
                                                className="dropdown-item">
                                                {this.state.strings.nav.language.spanish}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onMouseDown={() => this.setLanguage('en')}
                                                className="dropdown-item">
                                                {this.state.strings.nav.language.english}
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBarComponent;