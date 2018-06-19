import Resolutions from './resolutions';
import Goals from '../goals/goals';
/* Just to show that we can put this anywhere in here and access it
   Resolutions.insert({
       name: 'Test Res'
   });
*/

/* this was taken out in #15
// const res = Resolutions.find({}).fetch();
// console.log('This is the res in resolvers.js:', res); */
/* we replace the query to our server with a query to our database */
  /* Both Query & Mutation objects take 3 args which are these:
	 (obj, name, context){}  but need to look up context */
    /* ***NOTE*** if the resolution is not tied to a user through Mutation
       then userId won't show in the browser */
export default {
  Query: {
    resolutions (obj, args, { userId }) {
	  console.log('args: ',args);
      return Resolutions.find({
        userId
      }).fetch();
    }
  },
    Resolution: {	  /* console.log('resolutionId: ', resolution._id); /* Now we have access to our goals through the resolutions schema itself even though resolutions is not even calling goals */
    goals: resolution =>
      Goals.find({
        resolutionId: resolution._id
      }).fetch(),

    completed: resolution => {
      const goals = Goals.find({
        resolutionId: resolution._id
      }).fetch();
      if (goals.length === 0) return false;
      const completedGoals = goals.filter(goal => goal.completed);
      return goals.length === completedGoals.length;
    }
},
  /* From lesson #17

     Note that Scott keeps his mutations in a seperate file and uses merge to get them all together
     but that can get tricky  when the app is more complex, but this app is only having a couple mutations & querys so
     combining them will be done here
     *** Try and add items to the form with a user logged on and one when not, the resolution is tied to the app now
     ***THe problem was in the mutation here for the user
      */
  Mutation: {
    createResolution (obj, { name }, { userId }) {
	  if (userId) {
		/* resolutionId is sending the text field content on the client
		 side through a Mutation, and hitting the server   */
		// console.log('userId: ',userId);
		/* console.log('This is Resolutions from DB: ', Resolutions);
      console.log('This is name:', name);
      console.log('THis is obj: ', obj);
      console.log('This is context: ', userId);
      //  console.log('got here to the Mutation:{}'); */
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
		/* its only because graphql is expecting a return that
		 we have the following line. We are not yet doing
		 anything with this return  */
		return Resolutions.findOne(resolutionId);
	  }
	  throw new Error("Unauthorized");
    }
  }
};

/* --------------------------------------------------------------------------------------------------------
This is from up to video 13/14
import Resolutions from './resolutions';

/* Just to show that we can put this anywhere in here and access it
   Resolutions.insert({
       name: 'Test Res'
   });
*/
/*
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
*/
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
  // we replace the query to our server with a query to our database
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
