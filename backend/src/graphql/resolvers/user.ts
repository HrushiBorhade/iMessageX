const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: () => {
      console.log("Hey from API");
    },
  },
  // Subscription: {},
};

export default resolvers;
