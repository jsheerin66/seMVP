import Resolutions from './resolutions';

/* Just to shoe that we can put this anywhere in here and access it
   Resolutions.insert({
       name: 'Test Res'
   });
*/

const res = Resolutions.find({}).fetch();
console.log('This is the res in resolvers.js:', res);

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution() {
      console.log("got here");

      // const resolutionId = Resolutions.insert({
      //   name: "Test Res"
      // });
    }
  }
};
/*
 * export default {
 * //we replace the query to our server with a query to our database
 *   Query: {
 *     resolutions () {
 *       return Resolutions.find({}).fetch();
 *     }
 *   }
 * };
 *  */
/* This is from right before lesson 11 before hooking mongo up
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
