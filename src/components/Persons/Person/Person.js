import React , {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor(){
    super();
    this.inputElementRef = React.createRef();
  };
  componentDidMount(){
    this.inputElementRef.current.focus();
  };
  render(){
  console.log('[Person.js] rendering...');
  return (

    <Aux >
      <AuthContext.Consumer>
        {(context)=> this.props.isAuth? <p>Auth</p>:<p>NoAuth</p>}
      </AuthContext.Consumer>

      {}
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input 
      type="text" 
      ref={this.inputElementRef}
      onChange={this.props.changed} 
      value={this.props.name} />
    </Aux>
  );}
};

Person.propTypes={
  click:PropTypes.func ,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};
export default withClass(Person,classes.Person);
