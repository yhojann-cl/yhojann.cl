import { Component } from 'react';
import FooterComponent from '../../components/footer';

class NotFoundErrorPage extends Component {

    static route = /^\/error\/not\-found$/;
    static strings = {
        es: {
            title: 'La página no existe',
            description: 'Lamentablemente, la página que buscas no se encuentra disponible en este momento. Te invitamos a regresar a la página principal para continuar navegando.',
            back: 'Volver al inicio',
        },
        en: {
            title: 'The page does not exist',
            description: 'Unfortunately, the page you are looking for is not available at the moment. We invite you to return to the homepage to continue browsing.',
            back: 'Back to home',
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            strings: NotFoundErrorPage.strings.en
        }
    }

    componentDidMount() {
        this.setState({
            strings: NotFoundErrorPage.strings.hasOwnProperty(this.props.language) ?
                NotFoundErrorPage.strings[this.props.language] :
                NotFoundErrorPage.strings.en
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                <div className="flex-fill container mt-5 mb-4">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10 px-4 p-md-2 text-center mb-4">
                            <i className="bi bi-plugin d-block mb-3 py-4 opacity-75"
                                style={{ fontSize: '100px' }}></i>
                            <h2 className="mb-4">
                                {this.state.strings.title}
                            </h2>
                            <p className="lead mb-4 pb-4">
                                {this.state.strings.description}
                            </p>
                            <p>
                                <a className="btn btn-secondary px-4" href="#/">
                                    <i className="bi bi-chevron-left me-3"></i>
                                    {this.state.strings.back}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <FooterComponent language={this.props.language} />
            </div>
        );
    }
};

export default NotFoundErrorPage;