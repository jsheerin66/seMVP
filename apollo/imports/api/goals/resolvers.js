import Goals from './goals';

export default {
/* but we don't even need this query here
  Query: {
    goals (obj, args, { userId }) {
      return Goals.find().fetch();
    }
	},*/
  // everything we need to insert a goal into our database
  /* so everytime we create a new Goal it will
  automatically be set to completed: false and generate its Id */
  Mutation: {
    createGoal (obj, { name, resolutionId }) {
      const GoalId = Goals.insert({
        name,
        resolutionId,
		completed: false
      });
      return Goals.findOne(resolutionId);
    }
  }
};
//
