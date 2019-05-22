import React from 'react';

class Bomb extends React.Component{
  static defaultProps= {
    string: 'tock'
  }
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      string: '',
    }
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
      const newCount = this.state.count + 1;
      if (this.state.count % 2 === 0) {
        this.setState({
          ...this.state,
          string: 'tick',
        })
      }
      else if (this.state.count % 2 !== 0){
        this.setState({
          ...this.state,
          string: 'tock',
        })
      }
      if (this.state.count >= 8) {
        this.setState({
          ...this.state,
          string: 'BOOM!!!!'
        })
          clearInterval(this.interval);
      }
      this.setState({
        count: newCount
      })
      console.log(this.state.string);
    }, 1000)

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return <div>
      <p>{this.state.string}</p>
    </div>
  }
}
export default Bomb;
