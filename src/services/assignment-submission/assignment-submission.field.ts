export const assignmentSubmissionFields = `
  id: ID
  fileUrl: String
  note: String
  submitTime: DateTime
  status: String
  score: number
  feedback: String
  gradedAt: DateTime
`;

export const assignmentSubmissionQuery = `
  id
  fileUrl
  note
  submitTime
  status
  score
  feedback
  gradedAt
`;
