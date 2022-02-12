/*

---------------------------------------------
GraphQl queries

- View:

query {
  getAllViews {
    id, title, path
  }
}

{
  getView(id: "620134773cbe3c96e44f89d2") {
    title
  }
}

mutation {
  createView(input: {title: "Olga", path: "Shemay"}) {
    id
    title
  }
}

mutation {
  deleteView(id: "6203975a8893ca7c06e176ba") {
    id
  }
}

mutation {
  updateView(id: "6203975a8893ca7c06e176ba", input: {
    title: "Ola", path: "git.com"
    }) {
    id
    title
  }
}

- User:

mutation {
  register(registerInput: {
    username: "Guest"
    password: "55555"
    confirmPassword: "55555"
    email: "guest@mail.com"
    role: "admin"
  }) {
    id
    username
    email
    token
    role
    createdAt
  }
}

mutation {
  login(username: "Geri", password: "8822") {
    id
    username
    email
    token
    createdAt
  }
}

---------------------------------------------
Links:

Register and Login: 
https://youtu.be/YPKH6OhEHFI

Mongoose, Graphql and Heroku:
https://youtu.be/VLVEkyQPguU


*/
