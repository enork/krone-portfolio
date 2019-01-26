import React from 'react';

class ContactComponent extends React.Component {
    render() {
        return (
            <section className='section contact'>
                <div className='container'>
                    <div className='box'>
                        <div className="field">
                            <label class="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-danger" type="email" placeholder="Email input" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                            <p className="help is-danger">This email is invalid</p>
                        </div>

                        <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Subject" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-text">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;