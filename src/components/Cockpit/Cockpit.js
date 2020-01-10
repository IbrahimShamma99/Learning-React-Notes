import React, {useEffect ,useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = ( props ) => {

  const toggleBtnRef= useRef(null);

    //NOTE useEffect = ComponentDidMount + ComponentDidUpdate
    useEffect(()=>{
      console.log("[Cockpit.js] useEffect");
      //const timer = setTimeout(()=>{
        //alert("saved data to cloud"); 
        toggleBtnRef.current.click(); 
        return () => {
          // clearTimeout(timer);
          console.log("[Cockpit.js] cleanup useEffect");
        };
  },[
  ]
  );
  useEffect(()=>{ 
    console.log("[Cockpit.js] second useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup useEffect");
    };
  });
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref = {toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                
                <AuthContext.Consumer>
                  {(context) =>
                <button 
                onClick={props.login}>
                  NIGGA
                </button>}
                </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);