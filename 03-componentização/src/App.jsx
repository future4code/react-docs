import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <Comment
                author={{
                    avatarUrl: "https://placekitten.com/g/64/64",
                    name: "Bruno"
                }}
                text="Muito legal!!"
            />
        )
    }
}

function Comment(props) {
    return (
        <div className="comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    <b>Usuário:</b> {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
        </div>);
}