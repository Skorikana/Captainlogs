const React = require('react');

class Edit extends React.Component{
  
  render() {
    console.log(this.props.logs)
    return (
      <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
         Title: <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
         Entry: <input type="textarea" name="entry"  defaultValue={this.props.logs.entry}/><br/>
         ShipIsBroken:
               <input type="checkbox" defaultChecked={this.props.logs.shipIsBroken} name="shipIsBroken"/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    )
  }
}
module.exports= Edit;