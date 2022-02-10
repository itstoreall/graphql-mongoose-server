import { gql } from 'apollo-server';

const ViewSchema = gql`
  type User {
    id: ID
    username: String!
    email: String!
    token: String!
    createdAt: String
  }

  type View {
    id: ID
    title: String!
    path: String!
    timestamp: String
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
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
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createView(input: CreateViewInput): View!
    updateView(id: ID, input: UpdateViewInput): View!
    deleteView(id: ID): DeletePayload!
  }
`;

export default ViewSchema;
