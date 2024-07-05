import React from 'react';

class CardSkills extends React.Component {
    render(){
        const { name, image, description } = this.props;
        return (
            <div className="hardSkills">
                <p>{ name }</p>
                <img src={ image } alt={description} className="logoSkills"/>
            </div>
        )
    } 
}

export default CardSkills;