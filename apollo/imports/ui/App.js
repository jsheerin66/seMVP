import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

// *Note, Meteor.logout() sometimes hangs and won't logout when called. Firggin browsers
const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <button onClick={() => Meteor.logout()}>Logout</button>
      <RegisterForm />
      <LoginForm />
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
 query Resolutions {
  resolutions {
    _id
    name
   }
  }
`;

// In react-devtools we see that we have a prop from our hiQuery
export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(App);
