export default {
  /* we replace the query to our server with a query to our database */
  Query: {
    user (obj, args, { user }) {
      return user || {};
    }
  }
};
/* Also note that instead of retrurning || {}; We need filler so that meteor grabs the right thing
   or not, this is buggy, it won't run if the userId is undefined */
/* *Note that in Graphiql we have to use the following to get our data:
   query {
     user {
       _id
       __typename
    }
   }
*/

/* from App on vid #18 @ 9.20min
const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
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
    </div>
  );
} */
