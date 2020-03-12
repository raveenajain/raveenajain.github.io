import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
        </div>
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));




// resource used - https://www.taniarascia.com/getting-started-with-react/
