const React = require('react');

const myStyle = {
  color: 'black',
  backgroundColor: 'lightblue',
  padding:"20px",
  };

class Index extends React.Component {
      render() {
          const {logs} = this.props;
          return (
            <div style ={myStyle}>
            <h1>Logs Page</h1>
            <ul>
            {logs.map((log, i) => {
            return (
            <li>
            The{' '}
             <a href={`/logs/${log._id}`}>
             {log.title}
            </a>{' '}
            is in the {log.entry}.<br></br>
            Ship Broken is {log.shipIsBroken? `True` : `False`}
            <br />
            <a href={`/logs/${log._id}/edit`}>Edit</a>
            <form action = {`/logs/${log._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
              </form> 
            </li>
            );
            })}
            </ul>
            <nav>
        <a href="/logs/new"><h3>Create a New Log</h3></a>
        </nav>
        </div>
          );
      }
    }
    module.exports = Index;