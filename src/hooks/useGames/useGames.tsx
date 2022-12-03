import axios from "axios";
import { useCallback } from "react";
import { REACT_APP_API_SKYBALL } from "@env";
import {
  hideLoadingActionCreator,
  loadPagesActionCreator,
  loadPagesReducerActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteOneGameActionCreator,
  loadAllGamesActionCreator,
  loadOneGameActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";
import { type LoadGamesResponse } from "./types";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import RoutesEnum from "../../navigation/routes";
import { type GameFormData } from "../../types/types";

const gamesRoutes = {
  gamesRoute: "/games",
  getAllGames: "/list",
  addOneGame: "/add",
  deleteOneGame: "/delete",
  updateOneGame: "/update",
};

const useGames = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const loadAllGames = useCallback(
    async (page = 0, limit = 5) => {
      try {
        dispatch(showLoadingActionCreator());

        const response = await axios.get<LoadGamesResponse>(
          `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.getAllGames}`,
          {
            params: { page, limit },
          }
        );

        const { totalPages } = response.data.games;
        const currentPage = page;
        const gamesList = response.data.games.games;

        dispatch(loadAllGamesActionCreator(gamesList));
        dispatch(loadPagesActionCreator({ totalPages, currentPage }));
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
    },
    [dispatch]
  );

  const addOneGame = async (gameFormData: GameFormData) => {
    dispatch(showLoadingActionCreator());

    try {
      const newGame = await axios.post<GameStructure>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.addOneGame}`,
        gameFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          buttonText: "Continuar",
          modalTitle: "Todo listo para jugar",
          isError: false,
          modalText:
            "Tu partido ya esta publicado y otros jugadores pueden apuntarse!",
        })
      );

      dispatch(loadOneGameActionCreator(newGame.data));
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
      navigation.navigate(RoutesEnum.gameDetail);
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ups!",
          modalText:
            "Parece que ha habido un problema buscando el partido. Solo los usuarios registrados pueden ver los detalles.",
          buttonText: "Volver",
        })
      );
    }
  };

  const updateOneGame = async (gameId: string, gameFormData: GameFormData) => {
    dispatch(showLoadingActionCreator());
    try {
      const updatedGame = await axios.patch<GameStructure>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.updateOneGame}/${gameId}`,
        gameFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          buttonText: "Continuar",
          modalTitle: "Todo listo para jugar",
          isError: false,
          modalText: "Tu partido ha sido actualizado!",
        })
      );

      dispatch(loadOneGameActionCreator(updatedGame.data));
      navigation.navigate(RoutesEnum.gameDetail);
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          modalTitle: "Ha habido un error!",
          modalText: "Parece que ha habido un problema actualizando el partido",
          buttonText: "Volver",
        })
      );
    }
  };

  const deleteOneGame = async (gameId: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete<GameStructure>(
        `${REACT_APP_API_SKYBALL}${gamesRoutes.gamesRoute}${gamesRoutes.deleteOneGame}/${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(deleteOneGameActionCreator(gameId));
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          buttonText: "Volver",
          modalTitle: "Partido eliminado!",
          isError: false,
          modalText: "Tu partido ha sido eliminado",
        })
      );
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          buttonText: "Volver",
          modalTitle: "Ups!",
          isError: false,
          modalText: "Ha habido un problema borrando tu partido",
        })
      );
    }
  };

  return {
    loadAllGames,
    addOneGame,
    loadOneGame,
    deleteOneGame,
    updateOneGame,
  };
};

export default useGames;
