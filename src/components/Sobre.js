import React from "react";
import './Sobre.css'


class Sobre extends React.Component {
  
    render() {
        return (
            <section >
              <div className="divImage" id="sobreMim">
                <h2 >Sobre mim</h2>
                <p>Meu nome é Iris, tenho 30 anos e moro em São Paulo. Sou desenvolvedora web Front - end, caminhando para uma formação full stack na Trybe. <br></br><br></br> Durante meu ano como estudante na Trybe, tive a oportunidade de desenvolver diversos projetos que me proporcionaram experiências com JavaScript, HTML 5, CSS 3, React, Redux e testes unitários Jest. Atualmente estudando as stacks de back-end: Node Js, SQL, Docker e arquitetura de software. <br></br><br></br> Encontrei na tecnologia uma reconexão com a minha vontade de aprender e a curiosidade pelo mundo. Tenho um perfil empático, gosto de trabalhar em grupo e acredito que uma boa comunicação tem o poder de nos levar muito longe. Se pudesse me descrever em três palavras diria que sou curiosa empática e resiliente. 
                </p>
              </div>
            </section>
            
        )
    }
}

export default Sobre;