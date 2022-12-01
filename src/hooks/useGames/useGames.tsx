import axios from "axios";
import { useCallback } from "react";
import { REACT_APP_API_SKYBALL } from "@env";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  loadAllGamesActionCreator,
  loadOneGameActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";
import { type LoadGamesResponse } from "./types";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { type GameFormData } from "../../types/types";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";

const gamesRoutes = {
  gamesRoute: "/games",
  getAllGames: "/list",
  addOneGame: "/add",
};

const useGames = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigation = useNavigation<LoginScreenNavigationProp>();

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

  const addOneGame = async (gameFormData: GameFormData) => {
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

      navigation.navigate(RoutesEnum.explore);
    } catch {
      dispatch(hideLoadingActionCreator());
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

  const loadOneGame = async (gameId: string) => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<GameStructure>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}/${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const game = response.data;

      dispatch(hideLoadingActionCreator());
      dispatch(loadOneGameActionCreator(game));
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText:
            "Parece que ha habido un problema buscando el partido. Solo los usuarios registrados pueden ver los detalles",
          buttonText: "Volver",
        })
      );
    }
  };

  return {
    loadAllGames,
    addOneGame,
    loadOneGame,
  };
};

export default useGames;
