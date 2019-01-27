import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer class="section is-small has-text-centered has-background-grey-dark">
                <div class="container is-narrow">
                    <div class="logo">
                        <span class="icon has-text-white"><i class="fas fa-lg fa-terminal"></i></span>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-one-third">
                            <h1 class="title is-size-4-touch has-text-grey-light">Talk is cheap. Show me the code. <br /> – Linus Torvalds</h1>
                        </div>
                    </div>
                    <div class="social-icons">
                        <p class="field">
                            <a class="button is-medium is-inverted" href="https://www.linkedin.com/in/kyle-krone-00282a5b/" target="_blank">
                                <span class="icon is-small has-text-grey-light">
                                    <icon className='fab fa-linkedin' />
                                </span>
                            </a>
                            <a class="button is-medium is-inverted" href="mailto:enork789@gmail.com" target="_blank">
                                <span class="icon is-small has-text-grey-light">
                                    <icon className='fas fa-envelope' />
                                </span>
                            </a>
                        </p>
                    </div>

                    <div class="made-by-bulma">
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