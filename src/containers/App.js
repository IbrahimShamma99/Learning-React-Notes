import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor (props) {
    super (props);
    console.log ('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'asdf11', name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  };
  //NOTE is invoked right before calling the render method
  //ANCHOR static => it means that this component will be called once
  static getDerivedStateFromProps (props, state) {
    console.log ('[App.js] getDerivedStateFromProps', props);
    return state;
  };
  // componentWillMount() {
  //     console.log('[App.js] componentWillMount');
  // };
  componentDidMount () {
    console.log ('[App.js] componentDidMount');
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex (p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props)=>{
      return {
        persons: persons,
      changeCounter: prevState.changeCounter + 1 
}    });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice (personIndex, 1);
    this.setState ({persons: persons});
  };

  loginHandler = () => {
    this.setState({authenticated:true});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  };

  render () {
    console.log ('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        />
      );
    }

    return (
      <Aux classes = {classes}>
          <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated:this.state.authenticated,
          login:this.loginHandler
        }}>
        {this.state.showCockpit?
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />:null
        }
        {' '}
        {persons}
        {' '}
        </AuthContext.Provider>
    </Aux>
    );
  }
}

export default withClass(App,classes.App);
