import React from 'react';


const Icon=(props)=>{
    return(
        <div>
            <i className={`icofont-${props.icon} icon`}></i>
            <span className="details">{props.details}</span>
        </div>
    )
};

export default Icon;