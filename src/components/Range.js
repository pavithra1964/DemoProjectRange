import React from 'react';
import styled from 'styled-components';
import './common.css';
const Styles = styled.div`

`;
class Rangecomponent extends React.Component {
  state = {
    value: 50
  }
 handleOnChange = (e) => this.setState({value: e.target.value})
  render() {
    return (
      <Styles className="range-container">
        Current Status:<br />
        Memory Storage:<div> <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} /><div>{this.state.value}</div></div>
      </Styles>
    );
  }
}
export default Rangecomponent;









