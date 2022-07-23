import { IMocks } from 'graphql-tools';

export const mocks: IMocks = {
  Int: () => 10,
  Float: () => 1.25,
  String: () => 'Hello',
};
