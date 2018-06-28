import React from 'react';
import ReactDOM from 'react-dom';


class SomeComponentName extends React.Component {
    render() {
        return (
            <div>
                <h1></h1>
                <img />
            </div>
        );
    }
};

ReactDOM.render(
    <SomeComponentName />,
    document.getElementById('app')
);

