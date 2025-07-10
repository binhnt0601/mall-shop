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
 
  subject
  score
  maxScore
  status
  createdAt
`;
// class {
//   id
//   name
// }
// assignment {
//   id
//   title
// }
