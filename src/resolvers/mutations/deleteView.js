const deleteView = async (_, { id }, { models }) => {
  await models.View.deleteOne({ _id: id });

  return { id: id };
};

export default deleteView;
