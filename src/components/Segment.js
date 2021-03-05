
import React, { Component } from 'react';
import './common.css';


class Segment extends Component {
    render() {
        return (
            <div className="segment-container">
                <div>Your Choise :
              <div class="segmented-control">
    <input type="radio" name="animal" id="bear" value="bear" />
    <label for="bear">Cancel</label>
    <input type="radio" name="animal" id="lion" value="lion" />
    <label for="lion">Submit</label>
    <input type="radio" name="animal" id="lynx" value="lynx" />
    <label for="lynx">Clear</label>
  </div>
  </div>
  </div>
        )
    }
}
export default Segment;



































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './Styles.css';

// export default class SegmentedControl extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedSegment: 0,
//         };
//         this.renderSegments = this.renderSegments.bind(this);
//     }
//     static defaultProps = {
//         onChangeSegment: x => x,
//         variant: 'base',
//         selected: 0
//     };
//     componentDidMount() {
//         let selected = this.props.selected;
//         if(this.props.segments.map(function(e) { return e.disabled; }).indexOf(true) == selected) {
//             delete this.props.segments[selected].disabled;
//             console.error('Selected segment cannot be disabled');
//         }

//         this.setState({ selectedSegment: selected });
//     }

//     onChange = selectedSegment => {
//         this.setState({ selectedSegment });
//         this.props.onChangeSegment(selectedSegment);
//     };
//          renderSegments = () => {
//         return (
//             this.props.segments.map((segment, i) => {
//                 if (i === this.state.selectedSegment) {
//                     return (
//                         <li
//                             key={i}
//                             className={`${this.props.variant} selected`}
//                         >
//                             {segment.name}
//                         </li>
//                     );
//                 } else {
//                     if(segment.disabled) {
//                         return (
//                             <li
//                                 key={i}
//                                 className={`${this.props.variant}`}
//                                 aria-disabled="true"
//                             >
//                                 {segment.name}
//                             </li>
//                         );
//                     } else {
//                         return(
//                             <li
//                                 key={i}
//                                 className={`${this.props.variant}`}
//                                 onClick={() => this.onChange(i)}
//                             >
//                                 {segment.name}
//                             </li>
//                         );
//                     }
//                 }
//             })
//         )
//         }

//     render() {
//         return (
//             <div className="r-segmented-control">
//                 <ul>
//                     {
//                         this.renderSegments()
//                     }
//                 </ul>
//             </div>
        
//         )
            
//                 };
         
// SegmentedControl.propTypes = {
//     segments: PropTypes.array.isRequired,
//     selected: PropTypes.number,
//     variant: PropTypes.string    
// };

















