import React, { useState } from 'react';

//redux
// import { connect } from "react-redux";
// import { addFeature } from "../actions";

const AddedFeature = props => {
  console.log(props);
  const [addNewFeature, setAddNewFeature] = useState("");

  const handleChanges = e => {
    addNewFeature(e.target.value);
  };
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button" 
        // onClick={() => props.addFeature()}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     store: {
//       name: state.name
//     }
//   }
// }

// export default connect(mapStateToProps, { addFeature } )(AddedFeature);
export default AddedFeature;
