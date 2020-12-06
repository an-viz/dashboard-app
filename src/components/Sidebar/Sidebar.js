import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import table1 from '../../assets/table1.svg';
import form from '../../assets/form1.svg';
import todo from '../../assets/to-do.svg';
import creator from '../../assets/creator.svg';

const sidebar = (props) => (
    <nav >
        <ul>
            <Link className="Link" to="/" ><img src={form} alt="FORM" className="form" /></Link>
            <Link className="Link" to="/table" ><img src={table1} alt="TABLE" className="table" /></Link>
            <Link className="Link" to="/todo" ><img src={todo} alt="TO-DO" className="todo" /></Link> 
            <Link className="Link" to="/creator" ><img src={creator} alt="CREATOR" className="creator" /></Link>
        </ul>
    </nav>

);
export default sidebar;