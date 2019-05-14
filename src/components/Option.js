import React from 'react';

const Option = (props) => (
    <li>
        {props.count}. {props.option}
        <button className="button button--link" onClick={() => {props.removeOptionHandler(props.option)}}>Remove</button>
    </li>
);

export default Option;