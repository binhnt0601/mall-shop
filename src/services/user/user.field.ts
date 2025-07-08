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
  avatar: String
  level: Int
  lastLoginAt: DateTime
  activeAt: DateTime
  status: String
  isFirstLogin: Boolean
  referralCode: String
  referrenceId: String
  payment: PaymentType
  createdAt: DateTime
  updatedAt: DateTime
`;

export const paymentFields = `
  bankName: String
  accountBankName: String
  bankNumber: String
  walletAddress: String
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
  avatar
  level
  lastLoginAt
  activeAt
  status
  isFirstLogin
  referralCode
  referrenceId
  payment {
    bankName
    accountBankName
    bankNumber
    walletAddress
  }
  createdAt
  updatedAt
`;
