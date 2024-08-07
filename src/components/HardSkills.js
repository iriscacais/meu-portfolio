import React from "react";
import './HardSkills.css'
import CardSkills from "./CardSkills";
import dataHardSkills from "../dataHabilidades";
import './Formacao.css'

class HardSkills extends React.Component {
  
    render() {
        return (
            <main id="habilidades">
              <h2>Hard Skills</h2>
              <div className="divSkills">
                {dataHardSkills.map((skill, index) => (
                    <CardSkills 
                    key= {index}
                    name={skill.name}
                    image={skill.image}
                    description={skill.description}
                    />
                ))}
              </div>
            </main>
            
        )
    }
}

export default HardSkills;