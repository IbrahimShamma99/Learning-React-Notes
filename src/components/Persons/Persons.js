import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
  shouldComponentUpdate(nextProps,nextState){
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  };
  getSnapshotBeforeUpdate(){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message:"snapshot!"} ;
  };
  componentDidUpdate(prevProps,prevState,snapshot ) {
    console.log("[Persons.js] componentDidUpdate");
  };
  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
      />
    );
  });

}
};

export default Persons;
