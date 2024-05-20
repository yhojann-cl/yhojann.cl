import { Component } from 'react';
import Markdown from 'react-markdown'

class FooterComponent extends Component {

    static strings = {
        es: {
            name: 'Yhojann Aguilera Aguayo.',
            location: '*Santiago de Chile, {year}.*',
            linkedin: 'Linkedin',

        },
        en: {
            name: 'Yhojann Aguilera Aguayo.',
            location: '*Santiago of Chile, {year}.*',
            linkedin: 'Linkedin',

        },
    };

    constructor(props) {
        super(props);

        this.state = {
            strings: FooterComponent.strings.en
        }
    }

    componentDidMount() {
        this.setState({
            strings: FooterComponent.strings.hasOwnProperty(this.props.language) ?
                FooterComponent.strings[this.props.language] :
                FooterComponent.strings.en
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
                            <Markdown
                                disallowedElements={[ 'p' ]}
                                unwrapDisallowed={true}>
                                {this.state.strings.location.replace('{year}', (new Date()).getFullYear())}
                            </Markdown>
                        </p>
                    </div>
                    <div className="col-md-6 text-end">
                        <a className="btn btn-sm  btn-outline-secondary"
                            href="https://www.linkedin.com/in/yhojann-aguilera/"
                            target="_blank" rel="noreferrer">
                            <i className="bi bi-linkedin me-2"></i>
                            {this.state.strings.linkedin}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;