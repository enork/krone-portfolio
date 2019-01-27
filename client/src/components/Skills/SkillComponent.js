import React from 'react';
import SkillCategoryList from './SkillCategoryList';
import Config from '../Config';

class SkillComponent extends React.Component {
    render() {
        return (
            <section id='skill-section' className='section skills has-text-centered'>
                <div className='container is-narrow'>
                    <div className='box'>
                        <div className='content'>
                            <div className="columns is-centered">
                                {/*TODO: add icons above headings*/}
                                <SkillCategoryList categories={Config.categories_1} />
                                <SkillCategoryList categories={Config.categories_2} />
                                <SkillCategoryList categories={Config.categories_3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SkillComponent;