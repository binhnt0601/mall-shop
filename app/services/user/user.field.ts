export const userFields = `
    id: String
    email: String
    role: String
    name: String
    phone: String
    address: String
    lastLoginAt: DateTime
    activeAt: DateTime
    status: String
    isFirstLogin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    referralCode: String
    referrenceId: String
    level: Int
    sold: Int
    countReferrence: Int
    usdt: Float
    usd: Float
    vnd: Float
`;

export const userQuery = `
    id
    email
    role
    name
    phone
    address
    lastLoginAt
    activeAt
    status
    isFirstLogin
    createdAt
    updatedAt
    referralCode
    referrenceId
    level
    sold
    countReferrence
    usdt
    usd
    vnd
 `;
