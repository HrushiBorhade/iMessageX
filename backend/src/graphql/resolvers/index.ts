import userResolvers from "../resolvers/user";
import merge from "lodash.merge";

const resolvers = merge({}, userResolvers);

export default resolvers;
