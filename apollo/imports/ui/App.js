import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
/* Accounts is now a global variable from accounts-package it doesn't need to
   be imported here but we will just to keep it consistent*/
/* *Note, Meteor.logout() sometimes hangs and won't logout when called. Firggin browsers */
/* So what we did here was pass loading and resolutions here and because of
 the export default graphql({}); down below we set it up so that we can reference
 the resolutionsQuery by the data that we need which is resolutions */
const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
	<div>
	  { user._id ?
		(<button onClick={() => {Meteor.logout(); client.resetStore(); }}> Logout </button>)
		:
		(<div>
		  <RegisterForm client={client} />
		  <LoginForm client={client} />
		</div>
	  )}
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (<li key={resolution._id}>{resolution.name}</li> ))}
    </ul>
      </div>
  );
};

/* this needs to match the resolvers for graphical to work in the browser
   Check the props in App.js and see the refetch() that is there
*/
const resolutionsQuery = gql`
 query Resolutions {
  resolutions {
    _id
    name
  }
  user {
    _id
  }
}
`;

/* In react-devtools we see that we have a prop from our resolutionsQuery

*/
export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
/* If we need more control this is what we can have for graphqp({})
export default graphql(resolutionsQuery, {
  props: ({ data }) => (
  {
    resolutions: data.resolutions
  }
)
})(App);

//or more simply put:
export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(App);
*/

/* NOt that if error thrown with user._id as undefined use this in the return and
   then login and stay logged in so that user._id is not undefined
       <div>
      <button
        onClick={() => {
          Meteor.logout();
          client.resetStore();
        }}>
        Logout
      </button>
      <RegisterForm client={client} />
      <LoginForm client={client} />
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
*/



/* The one that is at the end of 18

    <div>
      { user._id ? (<button
        onClick={() => {
          Meteor.logout();
          client.resetStore();
        }}>
        Logout
      </button>
      ) : (
        <div>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </div>
        )}
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>*/
