export const scoreFields = `
  id: String
  student: User
  class: Class
  assignment: Assignment
  subject: String
  score: Float
  maxScore: Float
  status: String
  createdAt: DateTime
`;

export const scoreQuery = `
  id
  student {
    id
    name
  }
  class {
    id
    name
  }
  assignment {
    id
    title
  }
  subject
  score
  maxScore
  status
  createdAt
`;
