import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import 'typeface-oxygen';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      <div className="NavTop">
          <div className="title">
            listcraig
          </div>
          <div className="search">
            <input type="text" placeholder="Search"/>
          </div>
          <div className="navButtonsTop"><button>Create Posting</button></div>
          <div className="navButtonsTop"><button>Account</button></div>
          {/* to cut down on size, only kept one language from each letter */}
          <div className="dropdown">
            <select data-placeholder="Language">
              <option>English</option> <option>Albanian</option>
              <option>Basque</option> <option>Catalan</option>
              <option>Danish</option> <option>Fiji</option>
              <option>Georgian</option> <option>Hebrew</option>
              <option>Icelandic</option> <option>Japanese</option>
              <option>Korean</option> <option>Latin</option>
              <option>Macedonian</option> <option>Nepali</option>
              <option>Persian</option> <option>Quechua</option>
              <option>Romanian</option> <option>Samoan</option>
              <option>Tamil</option> <option>Ukrainian</option>
              <option>Vietnamese</option> <option>Welsh</option>
              <option>Xhosa</option>
            </select>
          </div>
        </div>
        <div className="NavBottom">
          <div className="location"> New York City</div>
          <div className="navButtonsBottom"><button>Brookyln</button></div>
          <div className="navButtonsBottom"><button>Bronx</button></div>
          <div className="navButtonsBottom"><button>Long Island</button></div>
          <div className="navButtonsBottom"><button>Manhattan</button></div>
          <div className="navButtonsBottom"><button>Queens</button></div>
          <div className="navButtonsBottom"><button>Staten Island</button></div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default Nav;

// resources: https://stackoverflow.com/questions/38909766/list-of-all-country-languages-for-dropdown-select-menu-html-form
