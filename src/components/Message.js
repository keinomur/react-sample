import React from 'react';

function Message(props) {
        const messages = [
            'hello',
            'react',
        ];

        return (
            <div>
                <p>Hello, {props.name} {props.test}</p>
            </div>
        )
}

export default Message;