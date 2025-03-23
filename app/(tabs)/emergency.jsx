import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const sosIcon = require("../../assets/images/SOS.png");
const helplineIcon = require("../../assets/images/Helpline.png");
const recordIcon = require("../../assets/images/Record.png");
const trackMeIcon = require("../../assets/images/Trackme.png");
const supportIcon = require("../../assets/images/Support.png");
const EmergencyOption = ({ label, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.gridText}>{label}</Text>
    </TouchableOpacity>
  );
};

const HelpLineScreen = () => {
  const navigation = useNavigation();

  const emergencyOptions = [
    { label: "SOS", image: sosIcon },
    
    { label: "Helpline", image: helplineIcon },
    { label: "Record", image: recordIcon },
    { label: "Track Me (Advanced)", image: trackMeIcon },
    { label: "Support", image: supportIcon },
  ];

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.emergencyCard}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" }}
          style={styles.contactImage}
        />
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>John Doe</Text>
          <Text style={styles.contactPhone}>+987 654 3210</Text>
        </View>
      </View>

      
      <View style={styles.grid}>
        {emergencyOptions.map((item, index) => (
          <EmergencyOption
            key={index}
            label={item.label}
            image={item.image}
            onPress={() => {
              if (item.label === "Helpline") {
                navigation.navigate("helpline");
              } else if (item.label === "SOS") {
                navigation.navigate("sos");
              } else if (item.label === "Record") {
                navigation.navigate("record");
               } else if (item.label === "Track Me (Advanced)") {
                  navigation.navigate("track");
                }
                else if (item.label === "Support") {
                  navigation.navigate("support");
                }
              }
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  emergencyCard: {
    backgroundColor: "#e91e63",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  contactPhone: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: "contain",
  },
  gridText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});

export default HelpLineScreen;