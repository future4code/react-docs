import React from 'react';
import Comment from './components/Comment';

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
