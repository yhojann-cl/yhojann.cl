import ReactDOM from 'react-dom/client';
import React from 'react';
import { Component } from 'react';
import pages from './page';
import { NotFoundError, FatalError, IntegrityError } from './error';

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/ubuntu';
import './assets/css/app.css';


/**
 * 
 */
class App extends Component {

    constructor(props) {
        super(props);

        // State
        this.state = {
            installed: null,
            page: null,
            params: {
                query: { },
                path: [ ]
            },
            loading: true,
            language: null,
            fatalError: null
        }

        // Binds
        this.setStateAsync = this.setStateAsync.bind(this);
        this.setView = this.setView.bind(this);
        this.onError = this.onError.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
    }

    componentDidMount() {

        window.__self_navigating = false;

        window.navigation.addEventListener('navigate', event => {

            // Prevent recursive loop
            if(window.__self_navigating)
                return;

            // Stop load
            event.preventDefault();

            // Start event
            window.__self_navigating = true;

            // When back (traverse) no need set the url forward
            if((event.navigationType === 'push') && // [ push, traverse ]

                // Need change
                (document.location.href !== event.destination.url))
                
                // Set the final url in the browser
                window.history.pushState({}, null, event.destination.url);

            // Stop event
            window.__self_navigating = false;

            // Set view
            this.setView();
        });

        // Set view on first load
        this.setView();
    }

    componentWillUnmount() {
        /* // Unhook navigation event
        window.removeEventListener('hashchange',
            event => this.setView(), false); */
    }

    async setStateAsync(data){
        return new Promise(resolve => this.setState(data, resolve));
    }

    async setLanguage(language) {
        
        // Persist on local storage
        localStorage.setItem('language', language);

        // window.location.reload();

        // Change state
        return this.setStateAsync({ language: language });
    }

    async setView() {
        
        // Clear component & show loader
        return this.setStateAsync({
            page: null,
            loading: true,
            fatalError: null,
        })

        // Deny external origins (clickjacking prevention - CWE-1021)
        // https://cwe.mitre.org/data/definitions/1021.html
        .then(() => {
            if(window.self !== window.top)
                throw new FatalError(`Same origin problem.`)
        })

        // Priorize the fatal error
        .then(() => {
            if(this.state.fatalError)
                throw this.state.fatalError;
        })

        // Find current page by path
        .then(() => pages
            .find(page => document.location.pathname.match(page.route)))

        // Route exists?
        .then(page => {
            if(!page)
                throw new NotFoundError(`Page is not found for: ${document.location.pathname}`);
            return page;
        })

        // Set the component to current state
        .then(page => this.setStateAsync({ page: page }))

        // Component log
        .then(() => (import.meta.env.DEV ?
            console.log(`Navigate to component: ${this.state.page.name}`) :
            undefined))

        // Get current params
        .then(() => {
            const match = document.location.pathname.match(this.state.page.route);
            return this.setStateAsync({
                params: {
                    query: Object.fromEntries(new URLSearchParams(document.location.search.slice(1))),
                    path: match ? match.slice(1) : [ ]
                }
            })
        })

        // Set language
        .then(() => {
            // Have a local storage?, it is priority
            const language = localStorage.getItem('language');
            if(language)
                return this.setStateAsync({ language: language });

            // User language
            if(this.state.profile !== null)
                return this.setStateAsync({
                    language: this.state.profile.language
                });

            // Browser language
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
        if(import.meta.env.DEV){
            console.log(`onError: ${e.constructor.name}`);
            console.error(e);
        }

        if(e instanceof NotFoundError)
            document.location = '/error/404';

        else if((e instanceof FatalError) ||
            (e instanceof IntegrityError))
            document.location = '/error/500';

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

        else if (this.state.loading || (this.state.page === null))
            return (
                <div className="d-flex flex-column min-vh-100">
                    <div className="flex-fill align-self-center d-flex flex-row">
                        <div className="align-self-center spinner-border opacity-50"></div>
                    </div>
                </div>
            );

        else
            return ( <this.state.page
                appEvents={{
                    setLanguage: language => this.setLanguage(language),
                }}
                params={this.state.params}
                language={this.state.language}
                onError={e => this.onError(e)} /> );
    }
}

// React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
