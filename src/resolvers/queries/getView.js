const getView = async (_, { id }, { models }) => {
  return await models.View.findOne({ _id: id });
};

export default getView;
