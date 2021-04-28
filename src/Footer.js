import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul className="list-unstyled ">
        {props.Address.map((address, index) => {
          return <li key={index}> {address}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;