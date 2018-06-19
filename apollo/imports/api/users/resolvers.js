export default {
  Query: {
    user(obj, args, { user }) {
	  console.log('Query in users/resolvers.js and this is the user: ', user);
      return user || {};
    }
  },
  User: {
    email: (user) => {
	  {return user.emails[0].address}
	}
  }
};

/* We can use a one-liner for the User.email instead of thisL:
User: {
    email: (user) => user.emails[0].address
  }
*/
