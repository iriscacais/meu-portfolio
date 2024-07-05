import React from 'react';

class CardProjetos extends React.Component {
    render(){
        const { name, image, description, details, github, deploy, altImage } = this.props;
        return (
            <div className="container">
                <div className="card">
                    <div className="imgBx" data-text={ name }>
                       <img src={ image } alt={altImage}/> 
                    </div>
                    <div className="content">
                        <div>
                            <h3>{ name }</h3>
                            <p>{ description }</p>
                            <p className="details"> Skills: { details }</p>
                            <a href={github} target="_blank" rel="noopener noreferrer" title="Link para gitHub do projeto"><i className="fa-brands fa-github fa-2x" aria-label="Link para gitHub do projeto"></i></a>
                           { deploy && (
                           <a href={deploy} target="_blank" rel="noopener noreferrer" title="Link para deploy do projeto"><i className="fa-solid fa-display fa-2x" aria-label="Link para deploy do projeto"></i></a>
                           )}
                           </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default CardProjetos;