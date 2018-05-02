import Resolutions from './resolutions';

/* Just to show that we can put this anywhere in here and access it
   Resolutions.insert({
       name: 'Test Res'
   });
*/

// this was taken out in #15
// const res = Resolutions.find({}).fetch();
// console.log('This is the res in resolvers.js:', res);

export default {
//we replace the query to our server with a query to our database
  Query: {
    // Both Query & Mutation objects take 3 args which are these (obj, name, context){}
    resolutions (obj, args, userId) {
      console.log('This is userId: ', userId);
      return Resolutions.find({}).fetch();
    }
  },
  // From lesson #12
  // Note that Scott keeps his mutations in a seperate file and uses merge to get them all together
  // but that can get tricky  when the app is more complex, but this app is only having a couple mutations & querys so
  // combining them will be done here
  Mutation: {
    createResolution (obj, { name }, { userId }) {
      console.log('This is Resolutions from DB: ', Resolutions);
      console.log('This is name:', name);
      console.log('THis is obj: ', obj);
      console.log('This is context: ', userId);
      //  console.log('got here to the Mutation:{}');
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};

/*--------------------------------------------------------------------------------------------------------
This is from up to video 13/14
import Resolutions from './resolutions';

/* Just to show that we can put this anywhere in here and access it
   Resolutions.insert({
       name: 'Test Res'
   });
*/

// const res = Resolutions.find({}).fetch();
// console.log('This is the res in resolvers.js:', res);

// export default {
//   Query: {
//     resolutions() {
//       return Resolutions.find({}).fetch();
//     }
//   },

//   Mutation: {
//     createResolution() {
//       console.log("got here");

//       // const resolutionId = Resolutions.insert({
//       //   name: "Test Res"
//       // });
//     }
//   }
// };

/*
export default {
//we replace the query to our server with a query to our database
  Query: {
    resolutions () {
      return Resolutions.find({}).fetch();
    }
  },
  // From lesson #12
  // Note that Scott keeps his mutations in a seperate file and uses merge to get them all together
  // but that can get tricky  when the app is more complex, but this app is only having a couple mutations & querys so
  // combining them will be done here
  Mutation: {
    createResolution () {
      console.log('got here to the Mutation:{}');
      const resolutionId = Resolutions.insert({
        name: 'Test Res'
      });
    }
  }
};

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
//*/
