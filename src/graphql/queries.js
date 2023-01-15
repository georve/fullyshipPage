/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvestor = /* GraphQL */ `
  query GetInvestor($id: ID!) {
    getInvestor(id: $id) {
      id
      firstName
      lastName
      email
      phone
      country
      contacted
      interested
      comments
      createdAt
      updatedAt
    }
  }
`;
export const listInvestors = /* GraphQL */ `
  query ListInvestors(
    $filter: ModelInvestorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvestors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        country
        contacted
        interested
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
