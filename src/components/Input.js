import React from "react";

//we can make use of refs as well other than useState
class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : "",
    }
  }

 setInput = (event)=>{
    this.setState({
      value : event.target.value,
    });
  }

  submit = (event) =>{
   event.preventDefault();
   this.props.search(this.state.value);
    this.setState({
      value : "",
    });
  }

  render(){
    return(
  <>
  <form onSubmit={this.submit}>  
    <div className="mt-4 myform">
     <input type="text" value={this.state.value} onChange={this.setInput} className="myInp" placeholder="Enter City Name" />
    </div>
  </form>
  </>
    );
  }

}

export default Input;