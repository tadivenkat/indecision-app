import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className="big-button"    
            disabled ={!props.hasOptions} 
            onClick={props.actionHandler}>
                What should I do now?
        </button>
    </div>
);

export default Action;