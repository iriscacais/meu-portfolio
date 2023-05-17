import React from 'react';
import './Banner.css'

class Banner extends React.Component {
    render() {
        return(
            
            <section className="divBanner">
                <img src='https://i.pinimg.com/564x/09/59/78/0959789677b6c538e05471a939713ebe.jpg' alt="Foto de Iris" className="foto" />
                <div className="divApresentacao"> 
                    <h2>Olá, eu sou a Iris!</h2>
                    <p className="paragrafoBanner">Estudante de desenvolvimento web da escola de programação Trybe. Sejam bem-vindos(as) ao meu portfólio.</p>
                </div>
                <span className="content">
                    <a href="mailto:mandeparairis@gmail.com" className="botoes">Entrar em contato</a>
                    <a href="./src/utils/curriculo-iris-cacais.pdf" download="curriculo-iris-cacais" className="botoes">Download CV</a>
                </span> 
            </section>
             
            
        )
    }
}
export default Banner;