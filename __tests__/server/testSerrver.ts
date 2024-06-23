import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolves';
import { prisma } from './__mocks__/prisma';
import { Context } from '@/pages/api/graphql';
import { NextApiRequest, NextApiResponse } from "next";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma: prisma }),
});