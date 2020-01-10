import React from 'react';
import AuthContext from '../../context/auth-context';
import Person from './Person/Person';

class Persons extends React.PureComponent {

//   shouldComponentUpdate(nextProps,nextState){
//     console.log("[Persons.js] shouldComponentUpdate");
//     if (
//        nextProps.persons !== this.props.persons ||
//        nextProps.changed !== this.props.changed || 
//        nextProps.clicked !== this.props.clicked
//        ){
//     return true;
//   }
//   else{
//     return false;
//   };
// };
  
  getSnapshotBeforeUpdate(){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message:"snapshot!"} ;
  };
  componentWillUnmount(){
    console.log("[Persons.js] componentWillUnmount");
  };
  componentDidUpdate(prevProps,prevState,snapshot ) {
    console.log("[Persons.js] componentDidUpdate");
  };
  render(){
    console.log('[Persons.js] rendering...');
    return <AuthContext.Consumer>
   {(context) => this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
      />
    );      
  })}
    </AuthContext.Consumer>

}
};

export default Persons;
