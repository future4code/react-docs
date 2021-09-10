import React from 'react';
import UserInfo from './UserInfo';

export default function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
        </div>);
}