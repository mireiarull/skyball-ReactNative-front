import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { type GameStructure } from "../redux/features/gamesSlice/types";

const gamesFactory = Factory.define<GameStructure>(() => ({
  date: faker.random.alphaNumeric(),
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
      material: [faker.random.word()],
    },
  ],
  image: faker.random.alphaNumeric(),
}));

export const getRandomGame = gamesFactory.build();

export const getRandomGameList = (number: number) =>
  gamesFactory.buildList(number);
