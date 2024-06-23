
import { resolvers } from '../../graphql/resolves';
import { Context } from '@/pages/api/graphql';
import { prisma } from './__mocks__/prisma';

jest.mock('../../prisma/db', () => ({
  prisma,
}));

describe('Resolvers', () => {
  const context: Context = { prisma };

  it('should return bed count 2 properties', async () => {
    const args = { page: 1, rowsPerPage: 10, beds: 2 };
    const result = await resolvers.Query.properties(null, args, context);
    expect(result.data).toHaveLength(1);
    expect(result.data.every((property: any) => property.beds===2)).toBeTruthy()
  });

  it('should return properties with Type SELL ', async () => {
    const args = { page: 1, rowsPerPage: 10, type: "SELL" };
    const result = await resolvers.Query.properties(null, args, context);
    expect(result.data).toHaveLength(2);
    expect(result.data.every((property: any) => property.type==="SELL")).toBeTruthy()
  });

  it('should return properties with prices range between 1000 and 3000', async () => {
    const args = { page: 1, rowsPerPage: 10, min_price: '1000', max_price: '3000',};
    const result = await resolvers.Query.properties(null, args, context);
    expect(result.data).toHaveLength(3);
    expect(result.data.every((property: any) => property.price >= 1000 && property.price <= 3000)).toBeTruthy()
  });

  it('should return properties with area range between 100 and 200', async () => {
    const args = { page: 1, rowsPerPage: 10, area_from: '100', area_to: '200',};
    const result = await resolvers.Query.properties(null, args, context);
    expect(result.data).toHaveLength(2);
    expect(result.data.every((property: any) => property.area >= 100 && property.area <= 200)).toBeTruthy()
  });
});
