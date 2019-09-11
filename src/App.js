
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App  = props => {
const [personsState, setPersonsState] = useState({
  persons: [
    { name: 'Octav', age: 23 },
    { name: 'Save', age: 21 },
    { name: 'Luca', age: 24 }
  ]
});
const [otherState, setOtherState] = useState('some other value');

 console.log(personsState, setOtherState);
const switchNameHandler = () => {
  //console.log('Wa clicked!');
  //this.state.persons[0].name = 'Octavian';
  setPersonsState( {
    persons: [
    { name: 'Octavian', age: 23 },
    { name: 'Save', age: 21 },
    { name: 'Luca', age: 25 }
  ] 
} );
}

  return (
    <div className="App">
     <h1>He, I'm a React App</h1>
     <p>This is really working!</p>
     <button onClick={switchNameHandler}>Switch name</button>
     <Person 
     name={personsState.persons[0].name} age={personsState.persons[0].age} 
     />
     <Person 
     name={personsState.persons[1].name} age={personsState.persons[1].age}> 
     My Hobbies: Gym 
     </Person>
     <Person 
     name={personsState.persons[2].name} 
     age={personsState.persons[2].age}
     />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React)
 }
export default App;

