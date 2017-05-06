import React from 'react';

const NAMES = ['Winber', 'Brandon', 'Ranelle', 'mark', 'Matthew', 'Hope'];

class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = { inputVal: "" };
    this.names = NAMES;
  }

  handleInput(e) {
    e.preventDefault();
    let text = e.currentTarget.value;
    this.names = NAMES.filter(name => name.toLowerCase().indexOf(text.toLowerCase()) === 0);
    this.setState({inputVal: text});
  }

  render() {
    return (
      <div className="auto">
        <input onInput={this.handleInput.bind(this)}></input>
        <ul>
          {this.names.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default AutoComplete;
