import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
/* withAppollo gives us resetStore() which is like :
   <find the thing equevalent from reac-redux>
  -in ReactRedux where it resets all the stores and re-renders
 state but should probably only be used where the entire
 store needs to be reset
*/
export default class LoginForm extends Component {
  login = e => {
	e.preventDefault();
	Meteor.loginWithPassword(this.email.value,  this.password.value, (error) => {
	  if (!error) {
		this.props.client.resetStore();
	  }
	});
  };

  render () {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Login User</button>
      </form>
    );
  }
}
