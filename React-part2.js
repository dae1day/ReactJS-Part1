import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>
      ReactDOM.render(myDiv, document.getElementById('app'))




      const profile = (
        <div>
          <h1>I AM JENKINS</h1>
          <img src="images/jenkins.png" />
          <article>
            I LIKE TO SIT
            <br />
            JENKINS IS MY NAME
            <br />
            THANKS HA LOT
          </article>
        </div>
      );
      //SELF CLOSING TAGS! END WITH A /




      import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
<h1>2+3</h1>, document.getElementById('app'));

//prints '2+3'

ReactDOM.render(
    <h1>{2+3}</h1>, document.getElementById('app'));
    // prints 5 because of curly braces {}



    import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>
      
      ReactDOM.render(math, document.getElementById('app'));
      // inject curly braces to make 2 + 3 = 5 {2+3}



      import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

//access variable from inside a JSX expression



const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
	<img src={goose} />
);


ReactDOM.render(gooseImg, document.getElementById('app'));




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy} //onClick inside img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));





//~~~~~~~~~~~~~~~~~~~~~~~~

import React from 'react';
import ReactDOM from 'react-dom';

//if.js works, because the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}; 

ReactDOM.render(img, document.getElementById('app'));

// produce img of either cat or dog depending on coinToss function 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// truthy falsy x? y : x

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy' ]} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~