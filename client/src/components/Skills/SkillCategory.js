import React from 'react';
import SkillList from './SkillList';

class SkillCategory extends React.Component {
    render () {
        return (
            <div className='skill category'>
                <h1 className='title is-size-4 is-spaced has-text-primary'>
                    {this.props.category.name}
                </h1>
                <SkillList skills={this.props.category.skills} />
            </div>
        );
    }
}

export default SkillCategory;