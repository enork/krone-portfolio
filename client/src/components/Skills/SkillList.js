import React from 'react';
import Skill from './Skill';

class SkillList extends React.Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skill, index) => {
                    return <Skill key={index} skill={skill} />
                })}
            </div>
        );
    }
}

export default SkillList;