import { Component } from 'react';

class HeaderComponent extends Component {

    static strings = {
        es: {
            name: 'Yhojann Aguilera Aguayo',
        },
        en: {
            name: 'Yhojann Aguilera Aguayo',
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            strings: HeaderComponent.strings.en
        }
    }

    componentDidMount() {
        this.setState({
            strings: HeaderComponent.strings.hasOwnProperty(this.props.language) ?
                HeaderComponent.strings[this.props.language] :
                HeaderComponent.strings.en
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
                    <a href="#/" className="stretched-link"></a>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;