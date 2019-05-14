import React from 'react';
import Option from './Option';


const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                {props.options.length > 0 && <button className="button button--link" onClick={props.removeAllHandler}>Remove All</button>}
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
            <ul>
                {props.options.map((option, index) => <Option key={option} count={index + 1} option={option} removeOptionHandler={props.removeOptionHandler}/>)}
            </ul>
        </div>
    );
}

export default Options;