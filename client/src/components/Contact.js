import React from 'react';
import NavComponent from './Navbar/NavComponent';
import ContactComponent from './Contact/ContactComponent';
import FooterComponent from './Footer/FooterComponent';

class App extends React.Component {

    render() {
        return (
            <div className='has-background-primary'>
                <NavComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default App;