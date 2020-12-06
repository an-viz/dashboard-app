import React, { useState } from 'react';

const Radio = () => {
    const [radio, setRadio] = useState(null);
    return(
        <>
            <label>Beginner</label>
                <input style={{width: '30px'}} type="radio"
                        checked={radio === "beginner"}
                        value="beginner"
                        onChange={(e) => {setRadio(e.target.value)}} />
            <label> |  Intermediate</label>
                <input style={{width: '30px'}} type="radio"
                        checked={radio === "intermediate"}
                        value="intermediate"
                        onChange={(e) => {setRadio(e.target.value)}} />
            <label> |  Expert</label>
                <input style={{width: '30px'}} type="radio"
                        checked={radio === "expert"}
                        value="expert"
                        onChange={(e) => {setRadio(e.target.value)}} />
        </>       
);
    }
export default Radio;