import React from 'react';

class Tab extends React.Component {
  constructor() {
    super();
    this.state = {idx: 0};
    this.tabs = ['1', '2', '3'];
  }

  handleClick(e) {
    e.preventDefault();
    let prevTab = document.getElementsByClassName(`${this.state.idx}`)[0];
    prevTab.classList.remove("selected");
    let tab = e.currentTarget;
    tab.classList.add("selected");
    let index = tab.classList[0];
    this.setState({ idx: index });
  }

  render() {
    return (
      <div className="tab">
        <header>
          <ul>
            <li><h1 className="0" onClick={this.handleClick.bind(this)}> zero </h1></li>
            <li><h1 className="1" onClick={this.handleClick.bind(this)}> one </h1></li>
            <li><h1 className="2" onClick={this.handleClick.bind(this)}> two </h1></li>
          </ul>
        </header>

        <article>
          {this.tabs[this.state.idx]}
        </article>
      </div>
    );
  }
}

export default Tab;
