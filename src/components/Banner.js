import React from 'react';
import './Banner.css';
import iris from '../images/desenvolvedora-iris-cacais.webp'

class Banner extends React.Component {
    render() {
        return(
            
            <section className="divBanner">
                <img src={iris} alt="Foto de Iris Cacais" className="foto" title='Iris'/>
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