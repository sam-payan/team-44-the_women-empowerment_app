import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All Projects");

  const sections = {
    "All Projects": [
      { title: "Startup Pitch Deck", info: "5 min | ₹500", image: "https://cdn-icons-png.flaticon.com/512/2490/2490413.png" },
      { title: "E-Commerce Website", info: "10 min | ₹750", image: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png" },
      { title: "Graphic Design", info: "⭐ 4.5 | 8,230 Students", image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png" },
      { title: "Web Development", info: "⭐ 4.8 | 12,500 Students", image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png" },
      { title: "Data Science", info: "⭐ 4.7 | 9,850 Students", image: "https://cdn-icons-png.flaticon.com/512/2821/2821621.png" },
      { title: "Co-Working Space", info: "Flexible workspaces", image: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png" },
      { title: "Freelance Hub", info: "Join freelancer network", image: "https://cdn-icons-png.flaticon.com/512/2028/2028401.png" },
      { title: "Tech Conference", info: "April 20, 2025 | Virtual", image: "https://cdn-icons-png.flaticon.com/512/2645/2645703.png" },
      { title: "Leadership Summit", info: "May 15, 2025 | NYC", image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" },
      { title: "Empowerment Stories", info: "Read success stories", image: "https://cdn-icons-png.flaticon.com/512/1822/1822929.png" },
      { title: "Tech Trends", info: "Latest industry insights", image: "https://cdn-icons-png.flaticon.com/512/2028/2028401.png" },
      { title: "Women’s Shelter", info: "Support housing & security", image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" },
      { title: "Educational Fund", info: "Help underprivileged girls", image: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png" },
      { title: "Adopt a Child", info: "Provide care & support", image: "https://cdn-icons-png.flaticon.com/512/2490/2490413.png" },
      { title: "Donate Essentials", info: "Food, books & clothes", image: "https://cdn-icons-png.flaticon.com/512/1822/1822929.png" },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, Women Empowerment</Text>
        <Text style={styles.subHeaderText}>Engage in community & make a difference</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Enrolled Modules</Text>
      </View>

      {sections["All Projects"].map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardInfo}>{item.info}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: "#e91e63",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: { fontSize: 26, color: "#fff", fontWeight: "bold", textAlign: "center" },
  subHeaderText: { fontSize: 16, color: "#fff", marginTop: 5, textAlign: "center" },
  section: { paddingHorizontal: 20, paddingVertical: 10 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  card: {
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 65, height: 65, borderRadius: 10 },
  details: { marginLeft: 15, flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardInfo: { fontSize: 15, color: "#666" },
});

export default HomeScreen;
