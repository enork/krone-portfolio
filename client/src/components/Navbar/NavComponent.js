import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery'

class NavComponent extends React.Component {
    componentDidMount() {
        $(document).ready(function () {

            // Check for click events on the navbar burger icon
            $(".navbar-burger").click(function () {

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");

            });
        });
    }

    render() {
        return (
            <section className='nav-section'>
                <nav className="navbar is-transparent has-background-grey-dark" aria-label="main navigation">
                    <div className='container'>
                        <div className="navbar-brand">
                            <div className='navbar-item'>
                                <Link to='/'>
                                    <span className=" navbar-item my-nav-icon has-text-primary">
                                        <i className="fas fa-3x fa-terminal"></i>
                                    </span>
                                </Link>
                            </div>

                            <a role='button' className="navbar-burger" href='#' data-target="navMenu" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id='navMenu' className="navbar-menu has-background-grey-dark">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        {/*<Link to='/contact' className='button is-medium is-primary is-rounded is-outlined'>Contact Me</Link>*/}
                                        <a className='button is-medium is-primary is-rounded is-outlined' href='mailto:enork789@gmail.com'>Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/*TODO: resume download*/}
            </section>
        );
    }
}

export default NavComponent;