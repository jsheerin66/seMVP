import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

/*
1)make the first Query inside our schema using back-ticks
2)note* this is not javascript, its graphgl query language
3) hi is typically a function(the function name here) and functions need to be defined in our schema
4)types can be different like instead of Query it could be its own thing like resolutions
*/
const typeDefs = `
type Query {
  hi: String
}    
`;

/*
1)after defining our query we need to define that function (hi) so define it in a resolver
2)unlike the Query this will be javascript
this is the actual method or server side code
*/
const resolvers = {
  Query: {
    hi() {
      return "Hey Yo, moving on UP!";
    }
  }
}

/*
1)now we need to pass both of those into our apollo server
2) we do that based on  makeExecutableSchema
3) it expects typeDefs and resolvers
*/
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

//we pass our schema(resolver/typeDefs to our apollo server)
createApolloServer({ schema });
