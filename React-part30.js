// react tutorial part 3
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
<MyComponentClass />,
document.getElementById('app')
);




// ~~~~~~~~~~ break down

// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }