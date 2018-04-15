import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// so lets define a mutation with graphql
const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

 class ResolutionForm extends Component {
  submitForm = () => {
	console.log("In the submitForm[this.name.value]: ", this.name.value);
	this.props.createResolution();
}
  render () {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
          <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

// in reactDevTools the props show up as 'mutate', but we named it createResolution
// so, to change the name -the graphql() takes a second arg (which is an object)
// We will use that to change the name of our mutation to the name created for
// our mutation which is createResolution
export default graphql (createResolution, {
  name: 'createResolution'
})(ResolutionForm);
