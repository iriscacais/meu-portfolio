import React from "react";
import './Sobre.css'


class Sobre extends React.Component {
  
    render() {
        return (
            <section className="sectionAbout">
              <div className="divImage" id="sobreMim">
                <h2>Sobre mim</h2>
                <p>Meu nome é Iris, tenho 30 anos e moro em São Paulo - SP. Sou dev Front - end com conhecimentos em React.js, HTML, CSS, JavaScript e consumo de APIs. Formada na escola de desenvolvimento Trybe.
                </p>
              </div>
            </section>
            
        )
    }
}

export default Sobre;