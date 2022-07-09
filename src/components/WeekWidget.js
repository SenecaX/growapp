import { StyleSheet, View, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";

function WeekWidget({ getWeek, show, weekType, title, weekOnPress } = props) {
  const plus = "+";

  useEffect(() => { }, []);

  function getWeekNum() {
    return title;
  }

  // on press week return selected week
  function onWeekPress(title) {
    weekOnPress(title);
  }

  return (
    <Pressable style={styles.container} getWeek={getWeekNum} key={title} onPress={() => onWeekPress(title)}>
      <View style={styles.elementAlign}>
        {!show && <Text style={styles.weekType}>{weekType}</Text>}
        {!show && <Text style={styles.title}>Week {title}</Text>}
      </View>
      {/* {!show && <Text style={styles.plus}>{plus}</Text>} */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 60,
    backgroundColor: "#2ecc71",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  weekType: {
    fontWeight: "bold",
  },
  title: {
    color: "#333",
  },
  plus: {
    textAlign: "center",
    fontSize: 24,
    // fontWeight: "bold",
  },
  elementAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WeekWidget;
