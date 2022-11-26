import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { type GameStructure } from "../redux/features/gamesSlice/types";

const gamesFactory = Factory.define<GameStructure>(() => ({
  date: faker.datatype.datetime(),
  format: faker.random.word(),
  gender: "M",
  level: faker.datatype.number(),
  spots: faker.datatype.number(),
  description: faker.lorem.sentence(),
  location: {
    type: "Point",
    coordinates: [11.111111111111111, 11.111111111111111],
  },
  players: [
    {
      id: faker.random.alphaNumeric(),
      rol: "owner",
      material: [faker.random.word()],
    },
  ],
}));

export const getRandomGameList = (number: number) =>
  gamesFactory.buildList(number);
