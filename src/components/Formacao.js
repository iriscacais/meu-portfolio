import React from "react";
import './Formacao.css'

class Formação extends React.Component {
  
    render() {
        return (
            <main id="experiencias">
                <h2>Formação</h2>
                <div className="divExperiencias">
                    <ul>
                        <li>Curso de desenvolvimento web na escola de programação Trybe de setembro de 2022 até outubro 2023</li>
                        <li id="fundamentos-description">Concluído: Módulo de fundamentos <a href="https://www.credential.net/cb5b43d4-d235-45fc-957d-b90026f4b0d7#gs.o7qc1o" target="_blank" rel="noopener noreferrer"  aria-labelledby="fundamentos-description" title="Link para o certificado"><i class="fa-solid fa-graduation-cap"></i></a></li>
                        <li id="front-description">Concluído: Módulo de front-end  <a href="https://www.credential.net/bff0f35e-d4f4-4eaa-aa35-e5f43afa138f" target="_blank" rel="noopener noreferrer"  aria-labelledby="front-description" title="Link para o certificado"><i class="fa-solid fa-graduation-cap"></i></a></li>
                        <li id="back-description">Concluído: Módulo de back-end <a href="https://www.credential.net/ab370315-4411-45e2-846b-0bbef4261f8c#gs.5anx54" target="_blank" rel="noopener noreferrer"  aria-labelledby="back-description" title="Link para o certificado"><i class="fa-solid fa-graduation-cap"></i></a></li>
                        <li id="ciencia-description">Concluído: Módulo de ciência da computação <a href="https://www.credential.net/385872df-bdee-4455-92b1-3427762ce1d4#gs.5anwq3" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"  aria-labelledby="ciencia-description" title="Link para o certificado"></i></a></li>

                    </ul>
                </div>
           </main> 
        )
    }
}

export default Formação;