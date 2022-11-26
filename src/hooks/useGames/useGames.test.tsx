import { renderHook } from "@testing-library/react";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../test-utils/providerWrapper";
import useGames from "./useGames";
import { store } from "../../redux/store";

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

  describe("When its method loadAllGames is invoked", () => {
    test("Then dispatch should be called three times to show and hide loading and to load the received games", async () => {
      const {
        result: {
          current: { loadAllGames },
        },
      } = renderHook(() => useGames(), {
        wrapper: ProviderWrapper,
      });

      await loadAllGames();

      expect(dispatchSpy).toHaveBeenCalledTimes(6);
    });
  });
});
