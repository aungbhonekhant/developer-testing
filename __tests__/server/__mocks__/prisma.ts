
import { PrismaClient, Property, Gallery, Prisma} from '@prisma/client';

// const mockPrisma = {
//   property: {
//     findUnique: jest.fn().mockResolvedValue(null),
//     findMany: jest.fn().mockResolvedValue([]),
//     count: jest.fn().mockResolvedValue(0),
//   },
// };

// const prisma = mockPrisma as unknown as PrismaClient;

// export { prisma };

export interface IProperty extends Property {
  gallery: Gallery []
}

const propertyMock: IProperty[] = [
  {
    id: '1',
    project: 'Test Project',
    title: 'Test Title',
    desc: 'Test Description',
    price: 1000,
    beds: 2,
    baths: 1,
    rate: 5,
    area: 500,
    thumbnail: 'test-thumbnail.jpg',
    gallery: [{ id: '1', url: 'test-url.jpg', propertyId: '1', createdAt: new Date(), updatedAt: new Date() }],
    type: 'RENT',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    project: 'Test Project Two',
    title: 'Test Title Two',
    desc: 'Test Description Two',
    price: 2000,
    beds: 3,
    baths: 2,
    rate: 4,
    area: 100,
    thumbnail: 'test-thumbnail-two.jpg',
    gallery: [{ id: '1', url: 'test-url-two.jpg', propertyId: '2', createdAt: new Date(), updatedAt: new Date() }],
    type: 'SELL',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    project: 'Test Project Three',
    title: 'Test Title Three',
    desc: 'Test Description Three',
    price: 3000,
    beds: 4,
    baths: 2,
    rate: 3,
    area: 200,
    thumbnail: 'test-thumbnail-three.jpg',
    gallery: [{ id: '1', url: 'test-url-three.jpg', propertyId: '3', createdAt: new Date(), updatedAt: new Date() }],
    type: 'RENT',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    project: 'Test Project Four',
    title: 'Test Title Four',
    desc: 'Test Description Four',
    price: 4000,
    beds: 1,
    baths: 1,
    rate: 5,
    area: 300,
    thumbnail: 'test-thumbnail-four.jpg',
    gallery: [{ id: '1', url: 'test-url-four.jpg', propertyId: '4', createdAt: new Date(), updatedAt: new Date() }],
    type: 'SELL',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];


const filterProperties = (property: any, filter: any) => {
  const projectFilter = filter.project?.contains ? property.project.includes(filter.project.contains) : true;
  const titleFilter = filter.title?.contains ? property.title.includes(filter.title.contains) : true;
  const typeFilter = filter.type?.equals ? property.type === filter.type.equals : true;
  const priceFilter = filter.price ? (property.price >= filter.price.gte && property.price <= filter.price.lte) : true;
  const areaFilter = filter.area ? (property.area >= filter.area.gte && property.area <= filter.area.lte) : true;
  const bedsFilter = filter.beds?.equals ? property.beds === filter.beds.equals : true;

  return projectFilter && titleFilter && typeFilter && priceFilter && areaFilter && bedsFilter;
};

const mockPrisma = {
  property: {
    findMany: jest.fn((args: Prisma.PropertyFindManyArgs) => {
      // Simple filtering logic for the mock
      const filter = args.where || {};
      const filteredProperties = propertyMock.filter((property) => filterProperties(property, filter))
      return filteredProperties;
    }),
    count: jest.fn((args: Prisma.PropertyCountArgs) => {
      // Count the number of filtered properties
      const filter = args.where || {};
      const filteredProperties = propertyMock.filter((property) => filterProperties(property, filter));

      return filteredProperties.length;
    }),
  },
} 

const prisma = mockPrisma as unknown as PrismaClient;

export { prisma };