import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;
console.log('This is the createGoal is = ',createGoal);


class GoalForm extends Component {
    state = {
	error: null
  }
  submitForm = () => {
    this.props
      .createGoal({
        variables: {
          name: this.name.value,
		  resolutionId: this.props.resolutionId
        }
      }).then(() => {
		/* Obviously this is to clear the input after goal is submitted */
		this.name.value="";
	  })

	  .catch(error => {
        console.log(error);
		this.setState({error: error.message})
      });
  };

  render() {
    return (
      <div>
		{this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

/* Notice that in ResolutionForm.js we took off the options key because we wanted graphql
to refetch the data automatically but here we added it so that we can tell graphql when to
 fetch the data*/
export default graphql(createGoal, {
  name: "createGoal",
  options: {
	refetchQueries: ["Resolutions"]
  }
})(GoalForm);
