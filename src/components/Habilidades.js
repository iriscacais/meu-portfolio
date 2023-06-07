import React from "react";
import './Habilidades.css'
import CardSkills from "./CardSkills";
import dataHardSkills from "../dataHabilidades";
import './Experiencias.css'

class Habilidades extends React.Component {
  
    render() {
        return (
            <main id="habilidades">
              <h2 >Hard Skills</h2>
              <div className="divSkills">
                {dataHardSkills.map((skill, index) => (
                    <CardSkills 
                    key= {index}
                    name={skill.name}
                    image={skill.image}
                    />
                ))}
              </div>
              <h2>Soft Skills</h2>
              <div className="divExperiencias">
                 <ul>
                <li>Trabalho em equipe</li>
                <br></br><br></br>
                <li>Comunicação multidisciplinar</li>
                <br></br><br></br>
                <li>Metodologias ágeis - trello / kanban</li>
              </ul>
              </div>
             
            </main>
            
        )
    }
}

export default Habilidades;