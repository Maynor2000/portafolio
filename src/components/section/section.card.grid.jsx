import React from 'react';

const SectionCardGrid = (props)=>{

    return(
        <div className="columns" >
            {props.grid.map((el)=>(
            <div className="column" id="_inline">
                <img src={el} alt="img"/>
            </div>
            ))}
           
        </div>
    )
}
export default SectionCardGrid;