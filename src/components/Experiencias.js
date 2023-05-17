import React from "react";
import './Experiencias.css'

class Experiencias extends React.Component {
  
    render() {
        return (
            <main id="experiencias">
                <h2>Experiências</h2>
                <div className="divExperiencias">
                    <br></br>
                    <ul>
                    <li>Início do curso de desenvolvimento web na escola de programação Trybe em setembro de 2022.</li>
                   <br></br>
                    <li>Concluído: Módulo de fundamentos <a href="https://www.credential.net/cb5b43d4-d235-45fc-957d-b90026f4b0d7#gs.o7qc1o" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i></a></li>
                    <br></br>
                    <li>Concluído: Módulo de front-end  <a href="https://www.credential.net/bff0f35e-d4f4-4eaa-aa35-e5f43afa138f" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i></a></li>
                    <br></br>
                    <li>Estudando: Módulo de back-end - Node Js, SQL, Docker e arquitetura de software</li>
                    <br></br>
                    <li>Próximos passos: ciência da computação</li>
                    </ul>
                </div>
           </main> 
        )
    }
}

export default Experiencias;