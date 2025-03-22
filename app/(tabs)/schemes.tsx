import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const SchemesScreen = () => {
  const schemes = [
    {
      title: "Pradhan Mantri Matru Vandana Yojana",
      description: "A maternity benefit scheme for pregnant women and lactating mothers.",
      image: "https://www.cabkgoyal.com/wp-content/uploads/2024/03/pradhan-mantri-matru-vandana-yojana.png",
    },
    {
      title: "Beti Bachao Beti Padhao",
      description: "An initiative to support the education and well-being of girls in India.",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8c/Beti_Bachao_Beti_Padhao_logo.jpg",
    },
    {
      title: "Mahila Shakti Kendra",
      description: "Empowering rural women through community participation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJjGaEDKs9qsznM99Ifp9LI7NDpqCu404ZA&s",
    },
    {
      title: "Working Women Hostel Scheme",
      description: "Providing safe accommodation for working women across India.",
      image: "https://www.fisdom.com/wp-content/uploads/2022/08/Shutterstock_1286595058.png",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Government Schemes</Text>
      </View>

      
      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>How to Use</Text>
        <Text style={styles.instructionsText}>
          Below is a list of government schemes that benefit different groups. Scroll through and tap on any scheme to learn more.
        </Text>
      </View>

      
      {schemes.map((scheme, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: scheme.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{scheme.title}</Text>
            <Text style={styles.description}>{scheme.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10, paddingBottom: 50 },

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

  
  instructions: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  instructionsText: {
    fontSize: 14,
    color: "#666",
  },

  // Card Styles
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: "100%", height: 200, resizeMode: "cover" },
  info: { padding: 15 },
  title: { fontSize: 18, fontWeight: "bold", color: "#333" },
  description: { fontSize: 14, color: "#666", marginTop: 5 },
});

export default SchemesScreen;
