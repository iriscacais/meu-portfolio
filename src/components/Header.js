import React from 'react';
import './Header.css'

class Header extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    closeMenu = () => {
        this.setState({clicked: false });
    }

    render() {
        return (

            <header className="headerMenu">
              <nav className="title">
                
                <div>
                    <ul  id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#sobreMim" className="navbar" onClick={this.closeMenu}>Sobre</a></li>
                        <li><a href="#experiencias" className="navbar" onClick={this.closeMenu}>Formação</a></li>
                        <li><a href="#habilidades"className="navbar" onClick={this.closeMenu}>Hard Skills</a></li>
                        <li><a href="#projetos"className="navbar" onClick={this.closeMenu}>Projetos</a></li>
                        <li><a href="#contato"className="navbar" onClick={this.closeMenu}>Contato</a></li>
                    </ul>
                </div>
                <div className="mobile" onClick={this.handleClick}>
                    <i id="bar" className= {this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars" }></i>
               
                </div>
              </nav>
            
            </header>
        )
    }
}

export default Header;