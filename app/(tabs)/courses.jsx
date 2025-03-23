import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("All Projects");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const sections = [
    { 
      title: "Graphic Design", 
      category: "Courses", 
      info: "⭐ 4.5 | 8,230 Students", 
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png", 
      description: "Learn advanced graphic design techniques.",
      details: {
        duration: "8 Weeks",
        skills: ["Adobe Photoshop", "Illustrator", "Branding", "UI/UX Design"],
        price: "₹4,500",
        instructor: "Sarah Thompson",
        certification: "Yes, upon completion",
      }
    },
    { 
      title: "Web Development", 
      category: "Courses", 
      info: "⭐ 4.8 | 12,500 Students", 
      image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png", 
      description: "Master front-end and back-end web development.",
      details: {
        duration: "12 Weeks",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        price: "₹6,000",
        
        certification: "Yes, upon completion",
      }
    }
  ];

  const tabs = ["All Projects", "Courses", "Workspaces"];

  const handleEnroll = () => {
    Alert.alert("Enrollment Successful", `You have enrolled in ${selectedCourse.title} for ${selectedCourse.details.price}`);
  };

  if (selectedCourse) {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedCourse(null)} style={styles.backButton}>
  <Ionicons name="arrow-back" size={24} color="white" />
</TouchableOpacity>

        <Image source={{ uri: selectedCourse.image }} style={styles.courseImage} />
        <Text style={styles.courseTitle}>{selectedCourse.title}</Text>
        <Text style={styles.courseInfo}>{selectedCourse.info}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>

        {/* Additional Course Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>📅 Duration:</Text>
          <Text style={styles.detailText}>{selectedCourse.details.duration}</Text>

          <Text style={styles.detailTitle}>🎯 Skills Covered:</Text>
          {selectedCourse.details.skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>• {skill}</Text>
          ))}

          <Text style={styles.detailTitle}>💰 Price:</Text>
          <Text style={styles.detailText}>{selectedCourse.details.price}</Text>

          <Text style={styles.detailTitle}>👨‍🏫 Instructor:</Text>
          <Text style={styles.detailText}>{selectedCourse.details.instructor}</Text>

          <Text style={styles.detailTitle}>📜 Certification:</Text>
          <Text style={styles.detailText}>{selectedCourse.details.certification}</Text>

          {/* Enroll Button */}
          <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

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
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => {
              if (item.category === "Courses") {
                setSelectedCourse(item);
              }
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardInfo}>{item.info}</Text>
            </View>
          </TouchableOpacity>
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
  backButton: { 
    position: "absolute", 
    top: 40,  
    left: 20,  
    color: "000",
    backgroundColor: "#000", 
    padding: 10, 
    borderRadius: 5,  
    zIndex: 10 
  },
  backButtonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
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
  courseImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
  courseTitle: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  courseInfo: { fontSize: 16, textAlign: "center", marginVertical: 5 },
  courseDescription: { fontSize: 16, marginTop: 10, paddingHorizontal: 15 },
  detailsContainer: { marginTop: 20, paddingHorizontal: 20 },
  detailTitle: { fontSize: 18, fontWeight: "bold", marginTop: 15 },
  detailText: { fontSize: 16, marginTop: 5 },
  skillItem: { fontSize: 16, marginLeft: 10 },
  enrollButton: { backgroundColor: "#e91e63", padding: 15, marginTop: 20, borderRadius: 10, alignItems: "center" },
  enrollButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default HomeScreen;
