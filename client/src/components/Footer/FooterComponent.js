import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="section is-small has-text-centered has-background-grey-dark">
                <div className="container is-narrow">
                    <div className="logo">
                        <span className="icon has-text-white"><i className="fas fa-lg fa-terminal"></i></span>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <h1 className="title is-size-4-touch has-text-grey-light">Talk is cheap. Show me the code. <br /> – Linus Torvalds</h1>
                        </div>
                    </div>
                    <div className="social-icons">
                        <p className="field">
                            <a className="button is-medium is-inverted" href="https://www.linkedin.com/in/kyle-krone-00282a5b/" rel="noopener noreferrer" target="_blank">
                                <span className="icon is-small has-text-grey-light">
                                    <i className='fab fa-linkedin' />
                                </span>
                            </a>
                            <a className="button is-medium is-inverted" href="mailto:enork789@gmail.com" rel="noopener noreferrer" target="_blank">
                                <span className="icon is-small has-text-grey-light">
                                    <i className='fas fa-envelope' />
                                </span>
                            </a>
                        </p>
                    </div>

                    <div className="made-by-bulma">
                        <a href="https://bulma.io">
                            <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;