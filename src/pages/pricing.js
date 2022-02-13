import React from "react";


async function getStripe(instaname, email) {
    
    try {
      const response = await fetch(`https://api.thebigbusiness.xyz/api/payment/stripe/create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          link: instaname,
          customerEmail: email,
          serviceId: "61ffc8166042437b0aeea97e"
        })
      })
      const json = await response.json();
      window.location.href = json.url;
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

export default class LoginForm extends React.Component {

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.instaname.value)
      getStripe(this.instaname.value, this.email.value);
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
                <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="instagram name"
            ref={input => this.instaname = input}/>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <input
            type="text"
            className="form-control"
            placeholder="email"
            ref={input => this.email = input}/>
        </div>  
        <button 
            type="submit" 
            className="btn btn-primary">Save
        </button>
        </form>
        
      );
    }
   }
  
   