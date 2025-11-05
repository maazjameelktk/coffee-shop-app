import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [randomItem, setRandomItem] = useState(null);

  const API_BASE = "http://localhost:3000"; 
  // 👆 Change to your computer IP if running on phone

  const fetchMenu = async () => {
    try {
      console.log("Fetching menu from:", `${API_BASE}/menu`);
      const res = await fetch(`${API_BASE}/menu`);
      const data = await res.json();
      console.log("Data received:", data);
      setMenu(data);
      setRandomItem(null);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  const fetchRandomItem = async () => {
    try {
      const res = await fetch(`${API_BASE}/menu/random`);
      const data = await res.json();
      setRandomItem(data);
      setMenu([]);
    } catch (err) {
      console.error("Error fetching random item:", err);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.price}>Rs {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={fetchMenu}>
          <Text style={styles.buttonText}>Full Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.surpriseButton]} onPress={fetchRandomItem}>
          <Text style={styles.buttonText}>Surprise Me</Text>
        </TouchableOpacity>
      </View>

      {randomItem && (
        <View style={styles.randomCard}>
          <Image source={{ uri: randomItem.image }} style={styles.image} />
          <Text style={styles.name}>{randomItem.name}</Text>
          <Text style={styles.category}>{randomItem.category}</Text>
          <Text style={styles.price}>Rs {randomItem.price}</Text>
        </View>
      )}

      <FlatList
        data={menu}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", color: "#777" }}>
            👋 Tap “Full Menu” or “Surprise Me” to load items
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  buttonRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  button: {
    backgroundColor: "#6f4e37",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  surpriseButton: { backgroundColor: "#b58863" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: { width: 120, height: 120, borderRadius: 10, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  category: { color: "#555" },
  price: { marginTop: 5, fontWeight: "bold", color: "#333" },
  randomCard: {
    backgroundColor: "#e0c097",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
});
