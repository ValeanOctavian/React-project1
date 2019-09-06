import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  state = {
    persons: [
      { name: 'Octav', age: 23 },
    {name: 'Save', age: 21 },
    {name: 'Luca', age: 25 }
    ]
 
  }

  return (
    <div className="App">
     <h1>He, I'm a React App</h1>
     <p>This is really working!</p>
     <button>Switch name</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Gym </Person>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React)
}
export default App;
