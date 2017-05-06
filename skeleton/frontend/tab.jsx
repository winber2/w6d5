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
    let tab = e.currentTarget.parentElement;
    tab.classList.add("selected");
    let index = tab.classList[0];
    this.setState({ idx: index });
  }

  render() {
    return (
      <div className="tab">
        <header>
          <ul>
            <li className="0"><h1 onClick={this.handleClick.bind(this)}> 1 </h1></li>
            <li className="1"><h1 onClick={this.handleClick.bind(this)}> 2 </h1></li>
            <li className="2"><h1 onClick={this.handleClick.bind(this)}> 3 </h1></li>
          </ul>
        </header>

        <div>
          <span>
            {this.tabs[this.state.idx]}
          </span>
        </div>
      </div>
    );
  }
}

export default Tab;
