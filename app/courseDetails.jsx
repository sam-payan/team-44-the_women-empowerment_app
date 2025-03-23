import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CourseDetailScreen = () => {
    return (
        <ScrollView style={styles.container}>
           

            
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/300x200' }} 
                    style={styles.image} 
                />
                <TouchableOpacity style={styles.playButton}>
                    <Icon name="play-circle-filled" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            
            <View style={styles.detailsContainer}>
                <Text style={styles.courseTitle}>Design Principles: Organizing</Text>
                <Text style={styles.courseInfo}>📅 21 Class   ⏳ 42 Hours</Text>
                <Text style={styles.price}>₹499/-</Text>
            </View>

            
            <View style={styles.tabs}>
                <Text style={[styles.tab, styles.activeTab]}>About</Text>
                <Text style={styles.tab}>Curriculum</Text>
            </View>

            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Section 01 - <Text style={{ color: 'red' }}>Introduction</Text></Text>
                <Text style={styles.sectionDuration}>25 Mins</Text>
            </View>

            <View style={styles.lesson}>
                <Text style={styles.lessonTitle}>01. Why Using Graphic Design?</Text>
                <Text style={styles.lessonDuration}>15 Mins</Text>
            </View>

            <View style={styles.lesson}>
                <Text style={styles.lessonTitle}>02. Setup Your Graphic Design</Text>
                <Text style={styles.lessonDuration}>10 Mins</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15 },
    backButton: { marginTop: 10 },
    imageContainer: { alignItems: 'center', marginVertical: 10 },
    image: { width: 300, height: 200, backgroundColor: '#000' },
    playButton: { position: 'absolute', bottom: 10, right: 10 },
    detailsContainer: { padding: 10 },
    courseTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
    courseInfo: { fontSize: 14, color: '#666' },
    price: { fontSize: 18, fontWeight: 'bold', color: 'red' },
    tabs: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd', marginVertical: 10 },
    tab: { flex: 1, textAlign: 'center', paddingVertical: 8, color: '#666' },
    activeTab: { fontWeight: 'bold', borderBottomWidth: 2, borderColor: 'red' },
    section: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#ddd' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold' },
    sectionDuration: { fontSize: 14, color: '#666' },
    lesson: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
    lessonTitle: { fontSize: 14, color: '#333' },
    lessonDuration: { fontSize: 12, color: '#666' }
});

export default CourseDetailScreen;