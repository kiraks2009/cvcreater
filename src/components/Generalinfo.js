import React, {Component} from "react"




class Generalinfo extends Component {
  constructor() {
      super()
      this.state = {
          firstName: "",
          lastName: "",
          address:"",
          image:null
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  render() {
      return (
        <div className="mywrapper">
        <h1>Personal Information</h1>
          <form>
          <input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/>
        

              <input type="text" name="firstName"placeholder="First Name" onChange=
              {this.handleChange} />
              <br />
              <input type="text" name="lastName"placeholder="Last Name" onChange=
              {this.handleChange} />
              <br />
              <input type="text" name="address"placeholder="address" onChange=
              {this.handleChange} />
              <br />
              <input type="text" name="email"placeholder="email" onChange=
              {this.handleChange} />
              <br />
              <input type="text" name="Phone"placeholder="phone" onChange=
              {this.handleChange} />
              <br />
              
              <h1>Personal Details</h1>
              <img id="target" className="photo" alt="pic" src={this.state.image}/>
              <br></br>
              <label>First Name<h3>{this.state.firstName} {this.state.lastName}</h3></label>
              <h3>{this.state.address}</h3>

              

              
          </form>
          </div>
      )
  }
}

export default Generalinfo;

  