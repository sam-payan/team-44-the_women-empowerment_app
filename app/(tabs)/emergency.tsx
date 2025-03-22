import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const SOSScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.emergencyCard}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" }}
          style={styles.contactImage}
        />
        <View>
          <Text style={styles.contactName}>Jane</Text>
          <Text style={styles.contactPhone}>+123 456 7890</Text>
        </View>
      </View>

     
      <View style={styles.grid}>
        {emergencyOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.icon} />
            <Text style={styles.gridText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const emergencyOptions = [
  {
    label: "SOS",
    image: "https://cdn-icons-png.flaticon.com/512/619/619043.png",
  },
  {
    label: "Emergency SMS",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    label: "Helpline",
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    label: "Record",
    image: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
  },
  {
    label: "Track Me (Advanced)",
    image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    label: "Support",
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },

  emergencyCard: {
    backgroundColor: "#d45b7a",
    padding: 20,
    borderColor:"#d45b7a",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width:"100%",
    
  },
  contactImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  contactName: { fontSize: 28, fontWeight: "bold", color: "#fff",paddingTop:65 },
  contactPhone: { fontSize: 18, color: "#fff",paddingBottom:55 },

  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
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
  icon: { width: 100, height:100, marginBottom: 10 },
  gridText: { fontSize: 14, fontWeight: "bold", textAlign: "center", color: "#333" },
});

export default SOSScreen;