import React from 'react';

class Accordian extends React.Component{
  static defaultProps = {
    sections: []
  }
  state = {
    currentTabIndex: null
  }
  handleClick(index){
    this.setState({ currentTabIndex: index})
  }
  renderButtons(){
    return this.props.sections.map((tab, index) => (
      <li key={index} onClick={()=> this.handleClick(index)}>
        {tab.title}
        {(this.state.currentTabIndex === index) && this.renderContent()}
      </li>
    ))
  }
  renderContent(){
    const currentTab = this.props.sections[this.state.currentTabIndex];

    return (
      <p className="content">
        {currentTab.content}
      </p>
    )
  }
  render(){
    return (
      <ul>
        {this.renderButtons()}
      </ul>
    )
  }
}
export default Accordian;
