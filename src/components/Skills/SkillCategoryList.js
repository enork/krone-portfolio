import React from 'react';
import SkillCategory from './SkillCategory';

class SkillCategoryList extends React.Component {
    render () {
        return (
            <div className="column">
                {this.props.categories.map((category, index) => {
                    return <SkillCategory key={index} category={category}/>
                })}
            </div>
        );
    }
}

export default SkillCategoryList;