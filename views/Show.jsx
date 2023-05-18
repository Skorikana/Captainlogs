const React = require('react')    //requires at the top

//component...this one is a class component
class Show extends React.Component {
   render () {
    const logs = this.props.logs;       //class component
    return (
      <div>
         <h1> Log Display Page </h1>
        The {logs.title} is scheduled for the {logs.entry}.
         {logs.shipIsBroken? ('Ship is broken') : ('Ship is not broken') }<br/><br/>
        <a href ="/logs">Go Back</a>
      </div>
     );
    }
 }
 module.exports  = Show;