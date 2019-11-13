import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return React.createElement(
            'div',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton), domContainer);