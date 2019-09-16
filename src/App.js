
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    { name: 'Octav', age: 23 },
    { name: 'Save', age: 21 },
    { name: 'Luca', age: 24 }
  ],
  otherState: 'some other value'
}
 
switchNameHandler = (newName) => {
  //console.log('Wa clicked!');
  //DON'T DO THIS!!!this.state.persons[0].name = 'Octavian';
  this.setState( {
    persons: [
    { name: newName, age: 23 },
    { name: 'Save', age: 21 },
    { name: 'Luca', age: 25 }
  ] 
} )
}

nameChangedHandler = (event) => {
  this.setState( {
    persons: [
    { name: event.target.value, age: 23 },
    { name: event.target.value, age: 21 },
    { name: event.target.value, age: 25 }
  ] 
} )
}

render() {
  return (
    <div className="App">
     <h1>He, I'm a React App</h1>
     <p>This is really working!</p>
     <button onClick={() => this.switchNameHandler('Octaviannnn!!!octavian!!!')}>Switch name</button>
     <Person 
     name={this.state.persons[0].name} age={this.state.persons[0].age} 
     changed={this.nameChangedHandler}/>
     <Person 
     name={this.state.persons[1].name} age={this.state.persons[1].age}
     click={this.switchNameHandler.bind(this, 'octa!!!')}
     changed={this.nameChangedHandler}> My Hobbies: Gym 
     </Person>
     <Person 
     name={this.state.persons[2].name} 
     age={this.state.persons[2].age}
     changed={this.nameChangedHandler}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React)
 }
}
export default App;

