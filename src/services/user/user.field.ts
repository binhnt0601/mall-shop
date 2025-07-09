export const userFields = `
  id: String
  googleId: String
  name: String
  email: String
  address: String
  district: String
  ward: String
  city: String
  phone: String
  password: String
  role: String
  userType: String
  avatar: String
  level: Int
  lastLoginAt: DateTime
  activeAt: DateTime
  status: String
  isFirstLogin: Boolean
  referralCode: String
  referrenceId: String
  createdAt: DateTime
  updatedAt: DateTime
`;

export const userQuery = `
  id
  googleId
  name
  email
  address
  district
  ward
  city
  phone
  password
  role
  userType
  avatar
  level
  lastLoginAt
  activeAt
  status
  isFirstLogin
  referralCode
  referrenceId
  createdAt
  updatedAt
`;
