import React from 'react';
import SkillComponent from './Skills/SkillComponent';
import NavComponent from './Navbar/NavComponent';
import ProfileComponent from './Profile/ProfileComponent';
import FooterComponent from './Footer/FooterComponent';

class App extends React.Component {

    render() {
        return (
            <div className='has-background-primary'>
                <NavComponent />
                {/*TODO: contact form*/}
                <FooterComponent />
            </div>
        );
    }
}

export default App;