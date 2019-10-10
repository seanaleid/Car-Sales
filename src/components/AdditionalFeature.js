import React from 'react';

//redux
import { connect } from "react-redux";

//actions
import { addFeature } from "../actions"

const AdditionalFeature = props => {
  console.log(`<AdditionalFeature />`, props);
  console.log(props.feature);

  // const handleClick = e => {
  //   e.preventDefault();
  //   // console.log(props.feature);
  //   // console.log(props.state);
  //   // console.log(e);
  //   // console.log(handleClick());
  //   addFeature(props.feature, props.state)
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => props.buyItem(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { addFeature } )(AdditionalFeature);
// export default AdditionalFeature;
