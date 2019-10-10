import React from 'react';

//components
import AddedFeature from './AddedFeature';

//redux
// import { connect } from "react-redux";

const AddedFeatures = ({ car, removeFeature }) => {
  // console.log(props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     car: {
//       features: state.features
//   }
// }

// export default connect(mapStateToProps, {} )(AddedFeatures)
export default AddedFeatures;
