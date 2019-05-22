import React from 'react';

class RouletteGun extends React.Component{
  static defaultProps = {
    bulletInChamber: 8,
  }
  constructor(props){
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      resultString: ''
    }
  }
  handleTriggerPulled = () => {
    this.setState({
      ...this.state,
      spinningTheChamber: true,
      resultString: 'spinning the chamber and pulling the trigger!...',
    })

    if ((this.state.chamber === this.props.bulletInChamber) && this.state.spinningTheChamber === false) {
      this.setState({
        ...this.state,
        resultString: 'BANG!!!!',
      })
    }
    if((this.state.chamber !== this.props.bulletInChamber) && this.state.spinningTheChamber === false) {
      this.setState({
        ...this.state,
        resultString: `you're safe!`,
      })
    }
    if (this.state.spinningTheChamber === true) {
      this.setState({
        ...this.state,
        resultString: 'spinning the chamber and pulling the trigger!...'
      })
    }
    this.interval = setInterval(()=>{
      const newNum = Math.ceil(Math.random() * 8);
      this.setState({
        ...this.state,
        chamber: newNum,
        spinningTheChamber: false
      })
        clearInterval(this.interval);
    }, 2000)
  }
  componentWillUnmount() {

  }
  render(){
    return <div className="orange">
      <p>Spinning the chamber and pulling the trigger!</p>
      <p className="trigger-result">{this.state.resultString}</p>
      <button onClick={this.handleTriggerPulled}>Pull the trigger!</button>
    </div>
  }
}

export default RouletteGun;
