import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import {
  type GameStructureWithId,
  type GameStructure,
} from "../redux/features/gamesSlice/types";
import { type GameFormData } from "../types/types";

const gamesFactory = Factory.define<GameStructure>(() => ({
  dateTime: faker.random.alphaNumeric(),
  format: faker.datatype.number({ min: 2, max: 6 }),
  gender: "M",
  level: faker.datatype.number(),
  spots: faker.datatype.number(),
  description: faker.lorem.sentence(),
  location: {
    type: "Point",
    coordinates: [11.111111111111111, 11.111111111111111],
  },
  beachName: faker.address.cityName(),
  players: [
    {
      id: faker.random.alphaNumeric(),
      role: "owner",
      material: {
        ball: true,
        net: true,
        rods: false,
      },
    },
  ],
  image: faker.random.alphaNumeric(),
  backupImage: faker.random.alphaNumeric(),
}));

const gamesFormDataFactory = Factory.define<GameFormData>(() => ({
  dateTime: faker.random.alphaNumeric(),
  format: faker.datatype.number({ min: 2, max: 6 }),
  gender: "M",
  level: faker.datatype.number(),
  spots: faker.datatype.number(),
  description: faker.lorem.sentence(),
  location: {
    type: "Point",
    coordinates: [11.111111111111111, 11.111111111111111],
  },
  beachName: faker.address.cityName(),
  image: faker.random.alphaNumeric(),
  backupImage: faker.random.alphaNumeric(),
  ball: false,
  net: false,
  rods: false,
}));

const gamesFactoryWithId = Factory.define<GameStructureWithId>(() => ({
  dateTime: faker.random.alphaNumeric(),
  format: faker.datatype.number({ min: 2, max: 6 }),
  gender: "M",
  level: faker.datatype.number(),
  spots: faker.datatype.number(),
  description: faker.lorem.sentence(),
  location: {
    type: "Point",
    coordinates: [11.111111111111111, 11.111111111111111],
  },
  beachName: faker.address.cityName(),
  players: [
    {
      id: faker.random.alphaNumeric(),
      role: "owner",
      material: {
        ball: true,
        net: true,
        rods: false,
      },
    },
  ],
  image: faker.random.alphaNumeric(),
  backupImage: faker.random.alphaNumeric(),
  id: faker.random.numeric(),
  owner: faker.random.numeric(),
}));

export const getRandomGame = gamesFactory.build();
export const getRandomGameWithId = gamesFactoryWithId.build();

export const getRandomGameList = (number: number) =>
  gamesFactory.buildList(number);

export const getRandomGameFormData = gamesFormDataFactory.build();

export const getRandomGameListWithId = (number: number) =>
  gamesFactoryWithId.buildList(number);
