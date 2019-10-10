import React from 'react';

//redux
// import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     car: {
//       image: state.image,
//       name: state.name,
//       price: state.price
//     }
//   }
// }

// export default connect(mapStateToProps, {} )(Header);
export default Header;
