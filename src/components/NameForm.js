import React from 'react';

function NameForm(props) {
    const handleText = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <div className="form">
            <input type="text"
                   onChange={handleText} />
        </div>
    )
}

export default NameForm