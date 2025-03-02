import AppComponent from './component';


/**
 * 
 */
export default class HeaderComponent extends AppComponent {

    /**
     * Special constructor for base definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: {
                es: {
                    name: 'Yhojann Aguilera Aguayo',
                },
                en: {
                    name: 'Yhojann Aguilera Aguayo',
                },
            },
            state: {},
        });
    }

    render() {
        return (
            <div>
                <div className="container border-bottom py-3 mb-5 mt-3 d-flex align-items-center position-relative">
                    <h2 className="mb-0">
                        <i className="bi bi-chevron-left me-4"></i>
                        {this.state.strings.name}
                    </h2>
                    <a href="/" className="stretched-link"></a>
                </div>
            </div>
        );
    }
}