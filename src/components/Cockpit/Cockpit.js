import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    //NOTE useEffect = ComponentDidMount + ComponentDidUpdate
    useEffect(()=>{
      console.log("[Cockpit.js] useEffect");
      const timer = setTimeout(()=>{
        alert("saved data to cloud");
        return () => {
          clearTimeout(timer);
          console.log("[Cockpit.js] cleanup useEffect");
        };
      },1000); 
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
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);