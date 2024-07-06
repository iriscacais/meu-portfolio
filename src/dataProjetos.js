import solarSistem from '../src/images/sistema-solar.webp';
import clinicaEstetica from '../src/images/clinica-estetica.webp';
import starWars from '../src/images/star-wars-filter.webp';

const dataProjetos = [
    {
        id: 1,
        name:'Solar System',
        description: 'Modelo de Sistema Solar utilizando React. - Front-end',
        details: 'React, JSX, CSS3',
        image: solarSistem,
        altImage:'Foto do projeto Sistema Solar',
        github:'https://github.com/iriscacais/solar-system',
        deploy:'https://known-wood.surge.sh/',
    },

    {
        id: 2,
        name:'Clínica de estética',
        description: 'Uma interface Front-end usando react',
        details: 'React, JSX, CSS3, Bootstrap',
        image: clinicaEstetica,
        altImage:'Foto do projeto Clínica de estética',
        github:'https://github.com/iriscacais/beautyclinicpage',
        deploy:'https://iriscacais.github.io/beautyclinicpage/',
    },
    {
        id: 3,
        name:'Star Wars filter',
        description: 'Desenvolvimento de multiplos filtros para uma tabela de planetas',
        details: 'react-hooks, context-api, unit-test',
        image: starWars,
        altImage:'Foto do projeto Star Wars filter',
        github:'https://github.com/iriscacais/projeto-star-wars-filters',
        deploy:'https://iriscacais.github.io/projeto-star-wars-filters/',
    },

    {
        id: 4,
        name:'Unit tests',
        description: 'Implementação de funções e testes unitários. - Fundamentos',
        details: 'ES6, Jest, testes unitários',
        altImage:'Foto do código do projeto Unit tests',
        image:'https://i.pinimg.com/564x/a1/54/01/a15401c6ed8a416dcc7e2c038b253fde.jpg',
        github:'https://github.com/iriscacais/unit-tests',
        deploy:'',
    },

    {
        id: 5,
        name:'Zoo functions',
        description: 'Implementação de funções para o sistema de um zoológico. - Fundamentos',
        details: 'ES6, HOFs, testes unitários',
        image:'https://i.pinimg.com/564x/b3/68/81/b36881542bbf4f5c8d8a25bfed9cea9b.jpg',
        altImage:'Foto do código do projeto Zoo functions',
        github:'https://github.com/iriscacais/zoo-functions',
        deploy:'',
    },
]
export default dataProjetos;