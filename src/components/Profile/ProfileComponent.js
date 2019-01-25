import React from 'react';

class ProfileComponent extends React.Component {
    render() {
        return (
            <section id='profile-section' className='section profile has-text-centered'>
                <div className='profile-background bg-img'>
                    <div className='profile-background-overlay'></div>
                    <div className='container is-narrow'>
                        <div className='content'>
                            <div className="columns is-mobile is-centered">
                                <div className='column is-hidden-mobile'></div>
                                <div className="column">
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src="/profile.png" alt="Profile image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">

                                                <div class="media-content">
                                                    <p class="title is-4">Kyle Krone</p>
                                                    <p class="subtitle is-7">Software Developer</p>
                                                </div>
                                            </div>
                                            <div class="content">
                                                Software developer in Memphis, TN. Passionate about software development and latest technologies. Experienced in developing
                                                customer-facing and business-facing applications.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='column is-hidden-mobile'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProfileComponent;