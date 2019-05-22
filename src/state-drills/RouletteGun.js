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
      spinningTheChamber: true,
      resultString: 'spinning the chamber and pulling the trigger!...',
    },() => {
      console.log('after trigger pull',this.state.spinningTheChamber);
    })



    this.interval = setInterval(()=>{
      const newNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: newNum,
        spinningTheChamber: false
      })
      if ((this.state.chamber === this.props.bulletInChamber) && this.state.spinningTheChamber === false) {
        this.setState({
          resultString: 'BANG!!!!',
        })
      }
      if((this.state.chamber !== this.props.bulletInChamber) && this.state.spinningTheChamber === false) {
        this.setState({
          resultString: `you're safe!`,
        })
      }

        clearInterval(this.interval);
    }, 2000)
  }
  componentWillUnmount() {

  }
  render(){

    // <p>{(this.state.chamber === this.props.bulletInChamber) ? 'BANG!!!' : `you're safe!`}</p>
    // Figure out conditional logic
    return <div className="orange">
      <p>Spinning the chamber and pulling the trigger!</p>
      <p className="trigger-result">{this.state.resultString}</p>
      <button onClick={this.handleTriggerPulled}>Pull the trigger!</button>
    </div>
  }
}

export default RouletteGun;
