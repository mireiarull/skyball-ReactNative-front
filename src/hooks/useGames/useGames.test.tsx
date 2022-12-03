import { renderHook } from "@testing-library/react";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../test-utils/providerWrapper";
import useGames from "./useGames";
import { store } from "../../redux/store";
import { getRandomGameFormData } from "../../factories/gamesFactory";
import { type GameFormData } from "../../types/types";
import makeWrapper from "../../mocks/makeWrapper";
import { mockloadOneGameResponse } from "../../mocks/gamesMocks";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useGames custom hook", () => {
  describe("When its method loadAllGames is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { loadAllGames },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      await loadAllGames();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema cargando los partidos",
          buttonText: "Volver",
        })
      );
    });
  });

  describe("When its method loadAllGames is invoked with current page 0", () => {
    test("Then dispatch should be called three times to show and hide loading and to load the received games", async () => {
      const {
        result: {
          current: { loadAllGames },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      await loadAllGames();

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method loadAllGames is invoked with current page 1", () => {
    test("Then dispatch should be called three times to show and hide loading and to load the received games", async () => {
      const {
        result: {
          current: { loadAllGames },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      await loadAllGames(1);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method addOneGames is invoked with one game and the server responds with 500 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with one error", async () => {
      const {
        result: {
          current: { addOneGame },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      const newRandomGame = getRandomGameFormData;

      const newGame: GameFormData = {
        ...newRandomGame,
      };

      await addOneGame(newGame);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method addOneGames is invoked with one game and the server responds with 201 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { addOneGame },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      const newRandomGame = getRandomGameFormData;

      const newGame: GameFormData = {
        ...newRandomGame,
      };

      await addOneGame(newGame);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method getOneGame is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with the error message", async () => {
      const {
        result: {
          current: { loadOneGame },
        },
      } = renderHook(() => useGames(), {
        wrapper: makeWrapper,
      });

      await loadOneGame("123456");

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalTitle: "Ups!",
          modalText:
            "Parece que ha habido un problema buscando el partido. Solo los usuarios registrados pueden ver los detalles.",
          buttonText: "Volver",
        })
      );
    });
  });

  describe("When its method getOneGame is invoked with id '123456'", () => {
    test("Then it should return the prediction with Id '123456'", async () => {
      const {
        result: {
          current: { loadOneGame },
        },
      } = renderHook(useGames, {
        wrapper: makeWrapper,
      });

      await loadOneGame(mockloadOneGameResponse.id!);

      expect(dispatchSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe("When its method deleteOneGame is invoked with gameId '123456' and the server responds with 404 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { deleteOneGame },
        },
      } = renderHook(useGames, {
        wrapper: makeWrapper,
      });

      await deleteOneGame("123");

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          buttonText: "Volver",
          modalTitle: "Ups!",
          isError: false,
          modalText: "Ha habido un problema borrando tu partido",
        })
      );
    });
  });

  describe("When its method deleteOneGame is invoked with gameId '123456' and the server responds with 200", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { deleteOneGame },
        },
      } = renderHook(useGames, {
        wrapper: makeWrapper,
      });

      await deleteOneGame("123456");

      expect(dispatchSpy).toHaveBeenCalledTimes(6);
    });
  });

  describe("When its method updateOneGame is invoked with predictionId '123456' and the server responds with 404 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { updateOneGame },
        },
      } = renderHook(() => useGames(), {
        wrapper: makeWrapper,
      });

      const newRandomGame = getRandomGameFormData;

      const newGame: GameFormData = {
        ...newRandomGame,
      };

      await updateOneGame(mockloadOneGameResponse.id!, newGame);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema actualizando el partido",
          buttonText: "Volver",
        })
      );
    });
  });

  describe("When its method updateOneGame is invoked with predictionId '123456' and the server responds with 200 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { updateOneGame },
        },
      } = renderHook(() => useGames(), {
        wrapper: makeWrapper,
      });

      const newRandomGame = getRandomGameFormData;

      const newGame: GameFormData = {
        ...newRandomGame,
      };

      await updateOneGame(mockloadOneGameResponse.id!, newGame);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          buttonText: "Continuar",
          modalTitle: "Todo listo para jugar",
          isError: false,
          modalText: "Tu partido ha sido actualizado!",
        })
      );
    });
  });
});
