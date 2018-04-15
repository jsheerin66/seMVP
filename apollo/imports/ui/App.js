import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) =>{
  if (data.loading) return null; {

  }
  return (
    <div>
    <div className="box">
      <h1 className="row">{data.hi}</h1>
	  <ul>
	    {data.resolutions.map(resolution => (
		  <li key={resolution.id}>{resolution.name}</li>
	    ))}
      </ul>
    </div>
  </div>
  )
}

const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
 }
}
`;
const username = gql`
{
  username:password
}
`

// In react-devtools we see that we have a prop from our hiQuery
export default graphql(
  hiQuery
)(App);
