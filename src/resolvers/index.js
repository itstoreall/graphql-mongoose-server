import queries from './queries/index.js';
import mutations from './mutations/index.js';

export default {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
