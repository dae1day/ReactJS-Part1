import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer />,
  document.getElementById('app')
);

//this.props

// ~~~~~~~~~~~~~~~ pass props to a component
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp="Hello" />,
  document.getElementById('app')
);



//~~~~~~~~~~~~~~~~~~~~~ render a component's props
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Day' />,
  document.getElementById('app')
);


// ~~~~~~~~~~ firstName is used in this.props.firstName



// greeting.js file

import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// app.js file

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name='Day' />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//~~~~~~~~~~~~~~~~~~~~~~ render different UI based on props
//~~~~~~~~~ welcome file
import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>
          hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
        <h2>
          WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}

//~~~~~~ home.js file
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);


//~~~~~~~~~ greeting.js file
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}

//~~~~~~~~~~~~~~~~~~~app.js file
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);




//~~~~~~~~~~~~~~~~~~~ unsure of this event handler in component class
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';



class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// ~~~~~~~~~~~~~~~~~~ working code below

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//~~~~~~~~~~~~~~

render() {
  return <Button talk={this.talk} />;

  //~~~~~~~~~~~~~~~~~~~ change component props

  import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />; //foo="bar" ---> talk="bar" ------> talk={this.talk}
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


//How to add onClick option on a button
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}