import PropTypes from "prop-types";
import React, { Component } from "react";
import './common.css';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
        <div className="togg-container">
        <div>Working Condition:
        <div className="toggle-container" onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "ON" : "OFF"}
        </div>
      </div>
      </div>
    </div>
    );
  }
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};
export default ToggleButton;