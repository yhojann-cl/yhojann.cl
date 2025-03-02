import AppComponent from '../component/component';


/**
 * Global error page.
 */
export default class ErrorPage extends AppComponent {

    /**
     * Page route.
     */
    static route = /^\/error\/(403|404|422|500|999)$/;

    /**
     * Special constructor for base PageComponent definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    '403': {
                        title: 'No tienes los permisos suficientes para acceder',
                        description: 'Lamentablemente, no tienes permiso para acceder a la página que buscas. Te invitamos a regresar a la página principal para continuar navegando.',
                    },
                    '404': {
                        title: 'La página no existe',
                        description: 'Lamentablemente, la página que buscas no se encuentra disponible en este momento. Te invitamos a regresar a la página principal para continuar navegando.',
                    },
                    '500': {
                        title: 'Ha habido un problema desconocido',
                        description: 'Hemos detectado que se ha producido un problema no controlado. Intenta volver y reintentar nuevamente.',
                    },
                    back: 'Volver al inicio',
                },
                en: {
                    '403': {
                        title: 'You do not have permissions to access',
                        description: 'Unfortunately, you do not have permission to access the page you are looking for. We invite you to return to the main page to continue browsing.',
                    },
                    '404': {
                        title: 'The page does not exist',
                        description: 'Unfortunately, the page you are looking for is not available at the moment. We invite you to return to the homepage to continue browsing.',
                    },
                    '500': {
                        title: 'There has been an unknown problem',
                        description: 'We have detected that an unhandled issue has occurred. Please try again later.',
                    },
                    back: 'Back to home',
                },
            },
            state: {
                code: props.params.path[0],
            }
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                <div className="flex-fill container mt-5 mb-4">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10 px-4 p-md-2 text-center mb-4">
                            <i className="bi bi-plugin d-block mb-3 py-4 app-text-color-2"
                                style={{ fontSize: '100px' }}></i>
                            <h2 className="mb-4">
                                {this.state.strings[this.state.code].title}
                            </h2>
                            <p className="lead mb-4 pb-4">
                                {this.state.strings[this.state.code].description}
                            </p>
                            <p>
                                <a className="btn btn-primary px-4" href="/">
                                    <i className="bi bi-chevron-left me-3"></i>
                                    {this.state.strings.back}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}