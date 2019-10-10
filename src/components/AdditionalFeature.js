import React from 'react';

//redux
// import { connect } from "react-redux";

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     store: {
//       name: state.name,
//       price: state.price
//     }
//   }
// }

// export default connect(mapStateToProps, {} )(AdditionalFeature);
export default AdditionalFeature;
