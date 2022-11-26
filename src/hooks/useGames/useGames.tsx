import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { REACT_APP_API_SKYBALL } from "@env";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { loadAllGamesActionCreator } from "../../redux/features/gamesSlice/gamesSlice";
import { type LoadGamesResponse } from "./types";

const gamesRoutes = {
  gamesRoute: "/games",
  getAllGames: "/list",
};

const useGames = () => {
  const dispatch = useAppDispatch();

  const loadAllGames = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<LoadGamesResponse>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.getAllGames}`
      );

      const { games } = response.data;

      dispatch(loadAllGamesActionCreator(games));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          openModalActionCreator({
            isError: true,
            modalTitle: "Ha habido un error!",
            modalText: "Parece que ha habido un problema cargando los partidos",
            buttonText: "Volver",
          })
        );
      }
    }
  }, [dispatch]);

  return {
    loadAllGames,
  };
};

export default useGames;
