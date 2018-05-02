import { Mongo } from 'meteor/mongo';

// new Mongo.Collection takes a string (In this case a lowercase 'resolutions')
const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;
// now we import this Resolutions to resolvers.js
