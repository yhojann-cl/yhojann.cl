import React, { Component } from 'react';
import MainFragment from '../fragment/main';
import './style.css';


export default (class Layout extends Component {

    constructor(props) {
        super(props);

        this.year = (new Date()).getFullYear();
    }

    render() {
        return (
            <div className="mx-auto">
                <header className="pt-3 d-none d-sm-block bg-gray">
                    <div className="container">
                        <div className="py-4">
                            <h1 className="m-0">Yhojann Aguilera.</h1>
                        </div>
                    </div>
                </header>

                <div className="d-sm-none hader-min text-center mb-4">
                    <div className="p-3 text-center bg-gray face"></div>
                    <h1 className="mt-4 py-4 mx-3">Yhojann Aguilera</h1>
                </div>

                <MainFragment />
                <footer className="bg-dark text-white pt-5 pb-4">
                    <div className="container text-center">
                        <p className="lead mb-4 links">
                            <a className="btn btn-outline-secondary" href="https://www.linkedin.com/in/yhojann-aguilera/" target="_blank" rel="noreferrer">
                                <i className="me-2 fa fa-linkedin-square"></i>
                                Linkedin
                            </a>
                            <span className="px-4"></span>
                            <a className="btn btn-outline-secondary" href="https://develrox.com/" target="blank" rel="noreferrer">
                                DevelR0X
                            </a>
                        </p>
                        <hr className="mb-4" />
                        <p className="text-muted h4">Yhojann Aguilera Aguayo</p>
                        <p className="text-muted mb-0"><em>Santiago de Chile, {this.year}.</em></p>
                    </div>
                </footer>
            </div>
        );
    }
});
