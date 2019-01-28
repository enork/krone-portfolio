import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <p>{this.props.skill.name}</p>
            //Add skill info configurable from config, modal?
        );

    }
}

export default Skill;