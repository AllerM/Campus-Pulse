import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MapView, { Marker, Region } from 'react-native-maps';
import Plus from '@/components/Plus';
import { useState } from 'react';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});



export default function HomeScreen() {
  const [region, setRegion] = useState({
    latitude: 42.3754421,
    longitude: -72.5194282,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.00921,
  });

  const onRegionChangeComplete = (newRegion: Region) => {
    setRegion(newRegion);
  };


  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.3754421, // Example: San Francisco
            longitude: -72.5194282,
            latitudeDelta: 0.0000022, // Adjusts zoom level
            longitudeDelta: 0.00921,
          }}
          onRegionChangeComplete={onRegionChangeComplete}
        >
          {/* Example Marker */}
          <Marker
            coordinate={{ latitude: 42.3754421, longitude: -72.5194282 }}
            title="K-DIDDY X BSU FUNCTION"
            description="This is a marker example"
          />
        </MapView>
        
        <Plus />
    </View>
    </>
  );
}


