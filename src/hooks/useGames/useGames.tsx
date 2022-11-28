import axios from "axios";
import { useCallback } from "react";
import { REACT_APP_API_SKYBALL } from "@env";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadAllGamesActionCreator } from "../../redux/features/gamesSlice/gamesSlice";
import { type LoadGamesResponse } from "./types";
import { type GameStructure } from "../../redux/features/gamesSlice/types";

const gamesRoutes = {
  gamesRoute: "/games",
  getAllGames: "/list",
  addOneGame: "/add",
};

const useGames = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const loadAllGames = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<LoadGamesResponse>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.getAllGames}`
      );

      const { games } = response.data;

      dispatch(loadAllGamesActionCreator(games));
      dispatch(hideLoadingActionCreator());
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema cargando los partidos",
          buttonText: "Volver",
        })
      );
    }
  }, [dispatch]);

  const addOneGame = async (gameFormData: GameStructure) => {
    try {
      await axios.post<GameStructure>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.addOneGame}`,
        gameFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        openModalActionCreator({
          buttonText: "Continuar",
          modalTitle: "Todo listo para jugar",
          isError: false,
          modalText:
            "Tu partido ya esta publicado y otros jugadores pueden apuntarse!",
        })
      );
    } catch {
      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema creando el partido",
          buttonText: "Volver",
        })
      );
    }
  };

  return {
    loadAllGames,
    addOneGame,
  };
};

export default useGames;
