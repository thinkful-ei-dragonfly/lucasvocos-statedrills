import React from 'react';

export default class Tabs extends React.Component{
  static defaultProps ={
    tabs: []
  }
  state = {
    currentTabIndex: 0,
  }
  handleClick(index){
    this.setState({ currentTabIndex: index})
  }
  renderButtons(){
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={()=> this.handleClick(index)}>
        {tab.name}
      </button>
    ))
  }
  renderContent(){
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className="content">
        {currentTab.content}
      </div>
    )
  }
  render(){
    return (
      <div>
        {this.renderButtons()}
        {/* only show content when the tabs array has a length*/}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}
