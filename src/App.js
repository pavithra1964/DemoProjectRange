import React, { useState } from 'react';
import Rangecomponent from './components/Range';

import styled from 'styled-components'
import ToggleButton from './components/Toggle';
import SegmentedControl from './components/Segment';
const Styles = styled.div`

`;


function App() {
  const [selected, setSelected] = useState(false);
  return (
    <Styles>
      <Rangecomponent />
      <ToggleButton selected={selected} toggleSelected={() => {
        setSelected(!selected);
      }} />
      <SegmentedControl />
    </Styles>
  );
}


export default App;
