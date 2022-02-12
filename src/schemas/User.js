import { gql } from 'apollo-server';

const UserSchema = gql`
  type User {
    id: ID
    username: String!
    email: String!
    token: String!
    role: String!
    createdAt: String
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    role: String!
    confirmPassword: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;

export default UserSchema;
