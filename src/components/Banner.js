import React from 'react';
import './Banner.css';
import iris from '../images/desenvolvedora-iris-cacais.webp'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
        };
    }

    componentDidMount() {
        const img = new Image();
        img.src = iris;
        img.onload = () => {
            this.setState({ imageLoaded: true });
        };
    }
    render() {
        return(
            
            <section className="divBanner">
                {!this.state.imageLoaded && <div className="carregando">Carregando...</div>}
                {this.state.imageLoaded && (
                <img src={iris} alt="Foto de Iris Cacais" className="foto" title="Iris" />
        )}
                <div className="divApresentacao"> 
                    <h1>Olá, eu sou a Iris!</h1>
                    <p className="paragrafoBanner">Desenvolvedora front-end. Sejam bem-vindos(as) ao meu portfólio.</p>
                </div>
                <span className="content">
                    <a href="mailto:mandeparairis@gmail.com" className="botoes">Entrar em contato</a>
                </span> 
            </section>
             
            
        )
    }
}
export default Banner;