
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {id:'123asd',  name: 'Octav', age: 23 },
    {id: '321asd', name: 'Save', age: 21 },
    {id: '231asd', name: 'Luca', age: 24 }
  ],
  otherState: 'some other value',
  showPersons: false
}
 


nameChangedHandler = (event, id ) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
  ...this.state.persons[personIndex]
  };
person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState({persons: persons } );
}

deletePersonsHandler = ( personIndex ) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

togglePersonsHandler = () => {
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow});
}

render() {
  const style ={
    backgroundColor:'white',
    font: 'inherit',
    border: '1px solid gry',
    padding: '10px',
    cursor: 'pointer'
  }

  let persons = null;
  if ( this.state.showPersons) {
    persons = (
      <div>
       {this.state.persons.map((person, index) => {
         return <Person 
         click={() => this.deletePersonsHandler(index)}
         name={person.name}
         age={person.age}
         key={person.id} 
         changed={(event) => this.nameChangedHandler(event, person.id)}/> 
       })}
       
  
      </div>
    )
  }

  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>Click on the button below</p>
     
     <button
     style={style}
     onClick={this.togglePersonsHandler}>showPersons</button>

{persons}
    
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React)
 }
}
export default App;

