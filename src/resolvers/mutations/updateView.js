const updateView = async (_, { id, input }, { models }) => {
  const viewToUpdate = await models.View.findOne({ _id: id });

  Object.keys(input).forEach(value => {
    viewToUpdate[value] = input[value];
  });

  const updatedView = await viewToUpdate.save();

  return updatedView;
};

export default updateView;
