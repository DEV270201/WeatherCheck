import React from "react";

class Footer extends React.Component{
  render(){
    return(
      <>
       <div className="footer">
        <h6> Copyright   ©   {new Date().getFullYear()} </h6>
       </div>
      </>
    );
  }
}

export default Footer;