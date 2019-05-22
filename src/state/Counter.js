import React from 'react';

class Counter extends React.Component{
  static defaultProps = {
    step: 1
  }
  constructor(props){
    super(props);
    console.log(`props in constructor ${props}`)
    this.state = { count: 0 };
    this.step = props.step;
  }
  handleButtonClick = () => {
    console.log(`props in handleButtonClick`, this.props);
    console.log(`state in handleButtonClick`, this.state);
    const newCount = this.state.count + this.step;
    this.setState({
      count: newCount
    })
  }
  render(){
    return (
      <div>
      <p>The current count: <code>{this.state.count}</code></p>
      <button
        onClick={this.handleButtonClick}
        >
        Add 1
      </button>
      </div>
    )
  }
}
export default Counter;
