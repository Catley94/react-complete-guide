import React, { Component } from 'react';
import Person from './Person/Person';


import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Stephanie', age:26}
    ],
    showPersons: false,
  }
//Reference to props.click in Person.js
 
//Reference to 'changed' prop in Person.js
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons : persons});
  }

  deletePersonHandler = (personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  })

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        
        </div>

      );
      style.backgroundColor = 'red';
      
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); //classes will be red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes will be red and bold
    }

    return (
      //Button onclick event, recommended to use .bind (as shown in click below), not using arrow function
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>{this.state.showPersons === true ? "Hide People" : "Show People"}</button>
        {persons}
       
        
      </div>
      
    );
  }
}

export default App;
