import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useGames from "../../hooks/useGames/useGames";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { useAppSelector } from "../../redux/hooks";
import GameCard from "../GameCard/GameCard";
import LoadMore from "../LoadMore/LoadMore";
import { mapStyle } from "../Map/MapStyles";
import styles from "./GameListStyles";

interface GamesListProps {
  games: GameStructure[];
}

const GameList = ({ games }: GamesListProps) => {
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.ui.pagination
  );
  const { loadOneGame } = useGames();

  const [showMap, setShowMap] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowMap(!showMap);
        }}
      >
        {showMap ? (
          <Text style={styles.mapLink}>Cerrar mapa</Text>
        ) : (
          <Text style={styles.mapLink}>Ver mapa</Text>
        )}
      </TouchableOpacity>
      {showMap && (
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            region={{
              latitude: 41.391165,
              longitude: 2.203355,
              latitudeDelta: 0.035,
              longitudeDelta: 0.0121,
            }}
          >
            {games.map((game) => (
              <Marker
                key={game.id}
                accessibilityRole="button"
                coordinate={{
                  latitude: game.location.coordinates[1],
                  longitude: game.location.coordinates[0],
                }}
                description={game.beachName}
                pinColor="blue"
                onPress={async () => loadOneGame(game.id!)}
              ></Marker>
            ))}
          </MapView>
        </View>
      )}
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        ListFooterComponent={
          <View style={styles.footer}>
            {currentPage !== totalPages - 1 && <LoadMore />}
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GameList;
