const getAllViews = async (_, {}, { models }) => {
  return await models.View.find();
};

export default getAllViews;
