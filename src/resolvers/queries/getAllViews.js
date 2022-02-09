const getAllViews = async (_, {}, { models }) => await models.View.find();

export default getAllViews;
