import { Mongo } from 'meteor/mongo';

// new Mongo.Collection takes a string (In this case a lowercase 'goals')
const Goals = new Mongo.Collection('goals');

export default Goals;
