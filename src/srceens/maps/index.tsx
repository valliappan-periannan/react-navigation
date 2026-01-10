import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const MapsScreen = () => {
  const permission = PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
  const [region, setRegion] = useState({
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });


  
  const checkPermission = async () => {
    const getLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          console.log('-==--', position);
          setRegion({
            ...region,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        err => {
          console.error('err', err);
        },
        {},
      );
    };
    try {
      const result = await check(permission);

      console.log('-=-=', result);
      if (result === 'denied') {
        const requestedResult = await request(permission);
        if (requestedResult === 'granted') {
          getLocation();
        }
      } else if (result === 'granted') {
        getLocation();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={region} showsUserLocation>
        <Marker coordinate={region} title="home" />
      </MapView>
    </View>
  );
};
export default MapsScreen;
