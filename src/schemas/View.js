import { gql } from 'apollo-server';

const ViewSchema = gql`
  type View {
    id: ID
    title: String!
    path: String!
    timestamp: String
  }

  input CreateViewInput {
    id: ID
    title: String!
    path: String!
  }

  input UpdateViewInput {
    id: ID
    title: String!
    path: String!
  }

  type DeletePayload {
    id: ID!
  }

  type Query {
    getAllViews: [View]
    getView(id: ID): View
  }

  type Mutation {
    createView(input: CreateViewInput): View!
    updateView(id: ID, input: UpdateViewInput): View!
    deleteView(id: ID): DeletePayload!
  }
`;

export default ViewSchema;
