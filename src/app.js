import { Component } from 'react';

// Required
import error from './error';

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/app.css'

// Pages
import LoaderMockupComponent from './pages/loader-mockup';
import NotFoundErrorPage from './pages/error/not-found';
import MainPage from './pages/main';

// Main component
class App extends Component {

    constructor(props) {
        super(props);

        // State
        this.state = {
            route: null,
            params: [ ],
            loading: true,
            component: null,
            language: null,
            fatalError: null
        }

        // Routing security
        this.components = [
            NotFoundErrorPage,
            MainPage,
        ];

        // Binds
        this.setStateAsync = this.setStateAsync.bind(this);
        this.setView = this.setView.bind(this);
        this.onError = this.onError.bind(this);
        this.getRouteParams = this.getRouteParams.bind(this);
    }

    componentDidMount() {
        // Hook navigation event
        window.addEventListener('hashchange', event => this.setView(), false);
        this.setView();
    }

    componentWillUnmount() {
        // Unhook navigation event
        window.removeEventListener('hashchange', event => this.setView(), false);
    }

    async setStateAsync(data){
        return new Promise(resolve => this.setState(data, resolve));
    }

    async getRouteParams(route){
        const hash = document.location.hash;
        if(!hash)
            return [ ];

        const path = hash.slice(1);
        if((!path) || (!path.length))
            return [ ];

        const match = path.match(route);
        if(!match)
            return [ ];

        // Strip current path
        return match.slice(1);
    }

    async setView() {
        
        // Clear component & show loader
        return this.setStateAsync({
            route: null,
            loading: true,
            component: null,
            componentError: null,
            language: null,
            fatalError: null,
        })

        // Priorize the fatal error
        .then(() => {
            if(this.state.fatalError)
                throw this.state.fatalError;
        })

        // Get current path
        .then(() => (document.location.hash.slice(1) || '/'))
        .then(route => this.setStateAsync({ route: route }))

        // Find component by current path
        .then(() => this.components.find(component => (component.hasOwnProperty('route') && this.state.route.match(component.route))))

        // Set default 404 component
        .then(component => {
            if(!component)
                throw new error.NotFoundError(`Component is not found for: ${document.location.hash.slice(1)}`);
            return component;
        })

        // Set the component to current state
        .then(component => this.setStateAsync({
            component: component
        }))

        // Set params
        .then(() => this.getRouteParams(this.state.component.route))
        .then(params => this.setStateAsync({ params: params }))

        // Set language
        .then(() => {

            // Have a local storage?
            if(localStorage.getItem('language'))
                return this.setStateAsync({
                    language: localStorage.getItem('language')
                });

            // Browser language as default
            const browserLanguage = navigator.language.split('-')[0].toLowerCase();
            return this.setStateAsync({
                language: browserLanguage
            });
        })

        // Hide loader
        .then(() => this.setStateAsync({ loading: false }))

        // Scroll to top
        .then(() => window.scroll({ top: 0, left: 0, behavior: 'instant' }))

        // Catch any error
        .catch(e => this.onError(e))
    }

    async onError(e) {
        if(e instanceof error.NotFoundError)
            document.location = '#/error/not-found';

        else {
            console.error(e.stack);
            this.setState({ fatalError: e });
        }
    }

    render() {
        if(this.state.fatalError)
            return (
                <div className="d-flex align-items-center my-5 py-5">
                    <div className="my-0 mx-auto text-center text-muted">
                        <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '24pt' }}></i>
                        <pre className="d-block mb-0 mt-4">{this.state.fatalError.toString()}</pre>
                    </div>
                </div>
            );

        else if (this.state.loading || (this.state.component === null))
            return <LoaderMockupComponent />;

        else
            return ( <this.state.component
                route={this.state.route}
                params={this.state.params}
                language={this.state.language}
                onError={e => this.onError(e)} /> );
    }
}

export default App;
