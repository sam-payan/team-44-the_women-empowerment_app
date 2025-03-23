import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { createHelp } from "../api/HelpApi";
import { router } from "expo-router";

const TrackMeScreen = () => {
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [message, setMessage] = useState(""); // State for message input

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation);
          setRouteCoordinates((prevCoordinates) => [
            ...prevCoordinates,
            newLocation.coords,
          ]);
        }
      );
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading map...</Text>
      </View>
    );
  }

  const handleTrack = async () => {
    if (!location) {
      Alert.alert("Error", "Location not available");
      return;
    }

    // Generate Google Maps URL
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const payload = {
      date: new Date().toISOString().split("T")[0],
      latitude: location?.coords?.latitude || 0,
      longitude: location?.coords?.longitude || 0,
      location: googleMapsUrl || "", 
      message: message || "No message provided",
      user_id: "Swati",
      status: "pending",
      updated_at: new Date().toISOString(),
    };
    const response = await createHelp(payload);
    if(response.status === 200){
      Alert.alert("Success", "Help request send successfully");
      router.push("/(tabs)/tabHome");
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Your Location"
          description="You are here"
        />
        {routeCoordinates.length > 1 && (
          <Polyline coordinates={routeCoordinates} strokeColor="#FF0000" strokeWidth={3} />
        )}
      </MapView>

      <TextInput
        style={styles.input}
        placeholder="Enter message"
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.clearButton} onPress={() => setRouteCoordinates([])}>
        <Text style={styles.clearButtonText}>Clear Route</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton} onPress={handleTrack}>
        <Text style={styles.clearButtonText}>Share Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  input: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  clearButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
  },
  shareButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default TrackMeScreen;
