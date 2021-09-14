import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

export default function Task({ text, swipe, index }) {
  const [selected, setSelected] = useState(false);

  return (
    <GestureRecognizer onSwipeLeft={() => swipe(index)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity
          style={styles.check}
          onPress={() => setSelected(!selected)}
        >
          <View style={selected ? styles.selected : styles.unselected}></View>
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55bcf6",
    opacity: 0.6,
    marginRight: 15,
  },
  unselected: {
    width: 12,
    height: 12,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 6,
  },
  selected: {
    width: 12,
    height: 12,
    backgroundColor: "blue",
    borderRadius: 6,
  },
});
