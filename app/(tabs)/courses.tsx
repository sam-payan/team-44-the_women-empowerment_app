import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("All Projects");

  const sections = [
    { title: "Startup Pitch Deck", category: "Projects", info: "5 min | ₹500", image: "https://cdn-icons-png.flaticon.com/512/2490/2490413.png" },
    { title: "E-Commerce Website", category: "Projects", info: "10 min | ₹750", image: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png" },
    { title: "Graphic Design", category: "Courses", info: "⭐ 4.5 | 8,230 Students", image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png" },
    { title: "Web Development", category: "Courses", info: "⭐ 4.8 | 12,500 Students", image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png" },
    { title: "Co-Working Space", category: "Workspaces", info: "Flexible workspaces", image: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png" },
  ];

  const tabs = ["All Projects", "Courses", "Workspaces"];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, Women Empowerment</Text>
        <Text style={styles.subHeaderText}>Engage in community & make a difference</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search for..." 
          style={styles.searchInput} 
          value={searchText} 
          onChangeText={setSearchText} 
        />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{selectedTab}</Text>
      </View>

      {sections
        .filter(item => selectedTab === "All Projects" || item.category === selectedTab)
        .map((item, index) => (
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
  searchContainer: { paddingHorizontal: 20, paddingVertical: 10 },
  searchInput: { backgroundColor: "#fff", padding: 10, borderRadius: 10 },
  tabsContainer: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  tab: { paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, backgroundColor: "#ddd" },
  activeTab: { backgroundColor: "#e91e63" },
  tabText: { fontSize: 14, color: "#333" },
  activeTabText: { color: "#fff" },
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
