const createView = async (_, { input }, { models }) => {
  const newView = await models.View.create(input);
  return newView;
};

export default createView;
