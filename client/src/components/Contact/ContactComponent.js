import React from 'react';
import $ from 'jquery';

class ContactComponent extends React.Component {
    constructor(props) {
        super(props);

        let submitURL = '/api/contact';
        if (process.env.NODE_ENV === 'development') {
            //submitURL = 'localhost:5000' + submitURL;
        }

        this.state = {
            email: '',
            subject: '',
            message: '',
            submitURL: submitURL
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('email: ' + this.state.email);
        console.log('subject: ' + this.state.subject);
        console.log('message: ' + this.state.message);
        console.log(this.state);
        $.post(this.state.submitURL, {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }, (result) => {
            console.log(result);
        });
    }



    render() {
        return (
            <section className='section contact'>
                <div className='container'>
                    <div className='box'>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className="input" 
                                        type="email" 
                                        placeholder="Email input"
                                        onChange={(e) => this.setState({email: e.target.value})} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                {/*<p className="help is-danger">This email is invalid</p>*/}
                            </div>

                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        placeholder="Subject"
                                        onChange={(e) => this.setState({subject: e.target.value})} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea 
                                        className="textarea" 
                                        placeholder="Textarea"
                                        onChange={(e) => this.setState({message: e.target.value})}></textarea>
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
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;