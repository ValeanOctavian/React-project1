
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
    { name: 'Octaviannnnnn', age: 23 },
    { name: event.target.value, age: 21 },
    { name: 'Luca', age: 25 }
  ] 
} )
}

render() {
  const style ={
    backgroundColor:'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
     
     <button
     style={style}
     onClick={() => this.switchNameHandler('Octaviannnn!')}>Switch name</button>
     <Person 
     name={this.state.persons[0].name} age={this.state.persons[0].age} 
     />
     <Person 
     name={this.state.persons[1].name} age={this.state.persons[1].age}
     click={this.switchNameHandler.bind(this, 'octa!!!')}
     changed={this.nameChangedHandler}> My Hobbies: Gym 
     </Person>
     <Person 
     name={this.state.persons[2].name} 
     age={this.state.persons[2].age}
     />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React)
 }
}
export default App;

