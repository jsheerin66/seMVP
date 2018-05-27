console.log('Before ed Query');
export default {
  Query: {
    user (obj, args, { user }) {
      return user || {};
    }
  }
};
console.log("after ed Query");
