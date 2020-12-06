import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import './Table.css';

const table= (props) => {
    const vitamins = [
        {vitamin:"A", classification:"fat-soluble", sources:"Dark-colored fruit", adequateIntake:"3,000 IU/day"},
        {vitamin:"B", classification:"water-soluble", sources:"Lean meats", adequateIntake:"1 mcg/day"},
        {vitamin:"B1", classification:"water-soluble", sources:"Lean meats", adequateIntake:"2.2 mcg/day"},
        {vitamin:"B6", classification:"water-soluble", sources:"Nuts", adequateIntake:"1.7 mg/day"},
        {vitamin:"B12", classification:"water-soluble", sources:"Meat", adequateIntake:"2.4 mcg/day"},
        {vitamin:"C", classification:"water-soluble", sources:"Broccoli", adequateIntake:"90 mg/day"},
        {vitamin:"D", classification:"fat-soluble", sources:"Fish", adequateIntake:"600 IU/day"},
        {vitamin:"E", classification:"fat-soluble", sources:"Avocado", adequateIntake:"33 IU/day"},
        {vitamin:"K", classification:"fat-soluble", sources:"Cabbage", adequateIntake:"120 mcg/day"}
    ];

    const renderVitamins = (vitamin, index) => {
        return(
            <tr className="hi" key={index}>
                <td>{vitamin.vitamin}</td>
                <td>{vitamin.classification}</td>
                <td>{vitamin.sources}</td>
                <td>{vitamin.adequateIntake}</td>
            </tr>
        );
    }

    return(
    <div  className="Body">
        <header className="Header" >
            <h1>Fancy Table</h1>
        </header>
        <ReactBootStrap.Table striped  hover 
            style={{ width:'75%',margin:'auto', border: '1px solid #8a2be2'}}>
            <thead className="Top">
                <tr >
                <th>VITAMIN</th>
                <th>CLASSIFICATION</th>
                <th>SOURCES</th>
                <th>ADEQUATE INTAKE(AI)</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {vitamins.map(renderVitamins)}
            </tbody>
        </ReactBootStrap.Table>
        <p className="tableFooter">mcg stands for micrograms. IU stands for International Units</p>
    </div>
    
);
    }
export default table;
