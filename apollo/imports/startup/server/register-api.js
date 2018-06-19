import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';


import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';
import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '../../api/goals/resolvers';
// !*!*!*!* Note- to user the graphql tools go to localhost:3000/graphigl //
/*
1) make the first Query inside our schema using back-ticks
2) note* this is not javascript, its graphgl query language
3) hi is typically a function(the function name here) and functions need to be defined in our schema
4) types can be different like instead of Query it could be its own thing like resolutions
*/
const typeDefs = [
  ResolutionsSchema,
  UsersSchema,
  GoalsSchema
];
// //
/* the merge() from lodash merges the two resolvers together instead of having
// add the resolver from resolvers.js which would also have a nested Query{}
// Thanks Scott, your naming conventions for your tutorials is disgusting
// *NOTE* merge is not common practice but is the best way
// Scott likes to have folders serperating reolvers, mutations, and schemas */
/* *!!**!! Note, Scott really does suck at teaching. He should stay away from teaching new technologies*/
/* fucking scott Make sure the order is correct here with Goals on the bottom. Otherwise it won't find the user:User because it extends the other schema */
const resolvers = merge(
  ResolutionsResolvers,
  UsersResolvers,
  GoalsResolvers
);
// console.log('This is resolvers: ', resolvers);
/*
1)now we need to pass both of those into our apollo server
2) we do that based on  makeExecutableSchema
3) it expects typeDefs and resolvers
*/
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
/* we pass our schema(resolver/typeDefs to our apollo server) */
createApolloServer({ schema });

/*
export default {
//we replace the query to our server with a query to our database
  Query: {
    hi() {
      return "Hey Yo, moving on UP!";
    },
    resolutions () {
      return [
        {
          _id: 'asdasd',
          name: 'get some name Oliver'
        },
        {
          _id: 'asdasd',
          name: 'get some name biggie'
        }
      ];
    }
  }
}
*/
