import React from 'react';

class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {who: 'world'};
  }
  handleClick = word => {
    this.setState({
      who: word
    })
  }
  render(){
    return (
      <div>
        <p>
          Hello {this.state.who}
        </p>
        <div className="button-row">
          <button onClick={() => this.handleClick('world')}>World</button>
          <button onClick={()=>this.handleClick('friend!')}>Friend</button>
          <button onClick={()=>this.handleClick('React!')}>React</button>
        </div>
      </div>

    )
  }
}
export default HelloWorld
