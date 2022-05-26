import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <body class="contact-body">
        <h2>Contact</h2>

        <form>
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label id="firstname">First Name</label>
                            <input
                            type="text"
                            class="form-control"
                            id="firstname"
                            placeholder="Enter first Name"
                            ></input>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label id="lastname">Last Name</label>
                            <input
                            type="text"
                            class="form-control"
                            id="lastname"
                            placeholder="Enter last Name"
                            ></input>
                        </div>
                    </div>

                    <div class="col col-md-12">
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input id="email" type="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input>
                            
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" class="form-control" placeholder="Send me a message!" rows="5" required="required"></textarea>
                        </div>
                    </div>

                    <div class="col col-md-12">
                        <input type="submit" class="btn btn-success btn-send pt-2 btn-block" value="Send"></input>
                    </div>
                </div>
            </div>



        </form>
      </body>
    );
  }
}

export default Contact;
