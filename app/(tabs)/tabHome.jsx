import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("Events"); 
  const [selectedItem, setSelectedItem] = useState(null);

  const sections = [
    { 
      title: "Women Empowerment Event", 
      category: "Events", 
      info: "📅 25th Oct 2023 | 🕒 10:00 AM", 
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png", 
      description: "Join us for a day of empowerment and networking.",
      details: {
        location: "Delhi, India",
        organizer: "Women Empowerment Foundation",
        agenda: ["Keynote Speech", "Panel Discussion", "Networking Session"],
      }
    },
    { 
      title: "Latest Blog: Women in Tech", 
      category: "Blog", 
      info: "📖 5 min read | 🗓️ 10th Oct 2023", 
      image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png", 
      description: "Exploring the challenges and opportunities for women in the tech industry.",
      details: {
        author: "Jane Smith",
        tags: ["Tech", "Women Empowerment", "Career"],
      }
    },
    { 
      title: "Problem Forum: Workplace Equality", 
      category: "Problem Forum", 
      info: "💬 120 Comments | 🔥 Trending", 
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png", 
      description: "Discuss challenges and solutions for achieving workplace equality.",
      details: {
        moderator: "Emily Johnson",
        topics: ["Pay Gap", "Leadership Representation", "Work-Life Balance"],
      }
    },
    { 
      title: "Clean Water Project", 
      category: "Projects", 
      info: "🌍 Ongoing | 🏢 NGO Partnership", 
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png", 
      description: "Providing clean drinking water to rural communities.",
      details: {
        location: "Rural India",
        organization: "Clean Water Initiative",
        goals: ["Install 100 water pumps", "Educate communities on water hygiene"],
      }
    },
    { 
      title: "Women Empowerment Organization", 
      category: "Organizations", 
      info: "👩‍💼 500+ Members | 🌟 Non-Profit", 
      image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png", 
      description: "Empowering women through education and skill development.",
      details: {
        location: "Mumbai, India",
        focus: ["Education", "Skill Development", "Entrepreneurship"],
      }
    },
    { 
      title: "Donate for Education", 
      category: "Donations", 
      info: "💰 ₹10,000 Raised | 🎯 Goal: ₹50,000", 
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063366.png", 
      description: "Support underprivileged children's education.",
      details: {
        organization: "Education for All",
        donationUsage: ["School Supplies", "Tuition Fees", "Infrastructure"],
      }
    },
    { 
      title: "Orphanage Support Program", 
      category: "Orphanage", 
      info: "🏠 50 Children | ❤️ Volunteer Opportunities", 
      image: "https://cdn-icons-png.flaticon.com/512/2015/2015710.png", 
      description: "Providing care and support to orphaned children.",
      details: {
        location: "Chennai, India",
        needs: ["Food", "Clothing", "Educational Materials"],
      }
    }
  ];

  const tabs = ["Events", "Blog", "Problem Forum", "Projects", "Organizations", "Donations", "Orphanage"]; 
  const handleBack = () => {
    setSelectedItem(null); 
  };

  if (selectedItem) {
    return (
      <ScrollView style={styles.container}>
        
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        
        <Image source={{ uri: selectedItem.image }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{selectedItem.title}</Text>
        <Text style={styles.itemInfo}>{selectedItem.info}</Text>
        <Text style={styles.itemDescription}>{selectedItem.description}</Text>

        
        <View style={styles.detailsContainer}>
          {selectedItem.details.location && (
            <>
              <Text style={styles.detailTitle}>📍 Location:</Text>
              <Text style={styles.detailText}>{selectedItem.details.location}</Text>
            </>
          )}

          {selectedItem.details.organizer && (
            <>
              <Text style={styles.detailTitle}>🏢 Organizer:</Text>
              <Text style={styles.detailText}>{selectedItem.details.organizer}</Text>
            </>
          )}

          {selectedItem.details.agenda && (
            <>
              <Text style={styles.detailTitle}>📝 Agenda:</Text>
              {selectedItem.details.agenda.map((item, index) => (
                <Text key={index} style={styles.skillItem}>• {item}</Text>
              ))}
            </>
          )}

          {selectedItem.details.author && (
            <>
              <Text style={styles.detailTitle}>✍️ Author:</Text>
              <Text style={styles.detailText}>{selectedItem.details.author}</Text>
            </>
          )}

          {selectedItem.details.tags && (
            <>
              <Text style={styles.detailTitle}>🏷️ Tags:</Text>
              {selectedItem.details.tags.map((tag, index) => (
                <Text key={index} style={styles.skillItem}>• {tag}</Text>
              ))}
            </>
          )}

          {selectedItem.details.moderator && (
            <>
              <Text style={styles.detailTitle}>👩‍💼 Moderator:</Text>
              <Text style={styles.detailText}>{selectedItem.details.moderator}</Text>
            </>
          )}

          {selectedItem.details.topics && (
            <>
              <Text style={styles.detailTitle}>💬 Topics:</Text>
              {selectedItem.details.topics.map((topic, index) => (
                <Text key={index} style={styles.skillItem}>• {topic}</Text>
              ))}
            </>
          )}

          {selectedItem.details.goals && (
            <>
              <Text style={styles.detailTitle}>🎯 Goals:</Text>
              {selectedItem.details.goals.map((goal, index) => (
                <Text key={index} style={styles.skillItem}>• {goal}</Text>
              ))}
            </>
          )}

          {selectedItem.details.focus && (
            <>
              <Text style={styles.detailTitle}>🎯 Focus Areas:</Text>
              {selectedItem.details.focus.map((focus, index) => (
                <Text key={index} style={styles.skillItem}>• {focus}</Text>
              ))}
            </>
          )}

          {selectedItem.details.donationUsage && (
            <>
              <Text style={styles.detailTitle}>💰 Donation Usage:</Text>
              {selectedItem.details.donationUsage.map((usage, index) => (
                <Text key={index} style={styles.skillItem}>• {usage}</Text>
              ))}
            </>
          )}

          {selectedItem.details.needs && (
            <>
              <Text style={styles.detailTitle}>🛒 Needs:</Text>
              {selectedItem.details.needs.map((need, index) => (
                <Text key={index} style={styles.skillItem}>• {need}</Text>
              ))}
            </>
          )}
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

      
      <ScrollView style={styles.itemsContainer}>
        {sections
          .filter(item => item.category === selectedTab)
          .map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.card} 
              onPress={() => setSelectedItem(item)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardInfo}>{item.info}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
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
  itemsContainer: { flex: 1, paddingHorizontal: 15 },
  card: {
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
  itemImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
  itemTitle: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  itemInfo: { fontSize: 16, textAlign: "center", marginVertical: 5 },
  itemDescription: { fontSize: 16, marginTop: 10, paddingHorizontal: 15 },
  detailsContainer: { marginTop: 20, paddingHorizontal: 20 },
  detailTitle: { fontSize: 18, fontWeight: "bold", marginTop: 15 },
  detailText: { fontSize: 16, marginTop: 5 },
  skillItem: { fontSize: 16, marginLeft: 10 },
  backButton: { paddingTop: 50, paddingLeft: 20, marginBottom: 10 },
  backButtonText: { fontSize: 20, color: "black", fontWeight: "bold" },
});

export default HomeScreen;