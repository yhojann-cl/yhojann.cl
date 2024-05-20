import { Component } from 'react';
import logoImg from '../assets/images/logo.png';

class LoaderMockupComponent extends Component {
    render() {
        return (
            <div className="d-flex flex-column min-vw-100 min-vh-100">
                <div>
                    <div className="container">
                        <nav className="navbar navbar-dark navbar-expand-lg">
                            <div className="container-fluid">
                                <div>
                                    <a className="navbar-brand" href="#/">
                                        <img className="img-fluid me-3" src={logoImg} style={{ height: '35px' }} alt="img" />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="flex-fill align-self-center d-flex flex-row">
                    <div className="align-self-center spinner-border app-text-color-3 opacity-50"></div>
                </div>
            </div>
        );
    }
}

export default LoaderMockupComponent;