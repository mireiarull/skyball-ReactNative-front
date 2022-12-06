import React from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle, styles } from "./MapStyles";

interface MapProps {
  longitude: number;
  latitude: number;
}

const Map = ({ longitude, latitude }: MapProps): JSX.Element => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={mapStyle}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        accessibilityRole="button"
        coordinate={{
          latitude,
          longitude,
        }}
        pinColor="blue"
      ></Marker>
    </MapView>
  </View>
);

export default Map;
