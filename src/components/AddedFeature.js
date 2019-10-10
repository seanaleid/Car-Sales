import React from 'react';

//redux
import { connect } from "react-redux";

import { deleteFeature } from "../actions";

const AddedFeature = props => {
  console.log(props);
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
