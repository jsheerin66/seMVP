import Goals from './goals';

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }, { userId }) {
	  if (userId) {
	    /* everything we need to insert a goal into our database in goalId */
        /* so everytime we create a new Goal it will
		   automatically be set to completed: false and generate its Id */
		const goalId = Goals.insert({
          name,
          resolutionId,
          completed: false
		});
		return Goals.findOne(goalId);
	  }
	  throw new Error("Unauthorized");
    },
    toggleGoal(obj, { _id }) {
	  const goal = Goals.findOne(_id);
	  goal.completed
	  Goals.update(_id, {
		$set: {
		  completed: !goal.completed
		}/* The things we pass to set are the only things that are going to get updated and if we tried to run this without $set() then it would override the other properties*/	  /*The things we pass to set are the only things that are going to get updated and if we tried to run this without $set() then it would override the other properties*/
	  });
	  return Goals.findOne(_id);
	}
  }
};








// import Goals from "./goals";
