import { Component } from 'react';

/**
 * Base class for all components using the react component.
 */
export default class AppComponent  extends Component{

    constructor(props, opts = { state: { } }) {
        super(props);
        this.opts = opts;

        this.state = {

            // Child state
            ...this.opts.state,

            // Parent state
            language: props.language,
            strings: this.opts.hasOwnProperty('strings') ?
                (
                    this.opts.strings.hasOwnProperty(props.language) ?
                    this.opts.strings[props.language] :
                    (this.opts.strings.en ?? { })
                ) : { },
        }

        // Bind context
        this._setStrings = this._setStrings.bind(this);
        this.setStateAsync = this.setStateAsync.bind(this);
    }

    async setStateAsync(data){
        return new Promise(resolve => this.setState(data, resolve));
    }

    componentDidMount() {
        this._setStrings();
    }

    componentDidUpdate() {
        this._setStrings();
    }

    _setStrings() {
        
        // Does not have strings
        if(!this.opts.hasOwnProperty('strings'))
            return;

        // Update language if is required
        if(this.state.language !== this.props.language)
            this.setState({
                language: this.props.language,
                strings: this.opts.hasOwnProperty('strings') ?
                (
                    this.opts.strings.hasOwnProperty(this.props.language) ?
                    this.opts.strings[this.props.language] :
                    (this.opts.strings.en ?? { })
                ) : { },
            });
    }
}