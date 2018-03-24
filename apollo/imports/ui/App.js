import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) =>
  <div>
    <div className="box">
      <h1 className="row">{data.hi}</h1>
    </div>
  </div>

const hiQuery = gql`
{
  hi
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
