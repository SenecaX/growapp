import { StyleSheet, View, Text } from "react-native";

function WeekWidget(props) {
  return (
    <View style={styles.container}>
      {!props.show && <Text style={styles.weekType}>{props.weekType}</Text>}
      {!props.show && <Text style={styles.title}>{props.title}</Text>}
      {props.show && <Text style={styles.plus}>{props.plus}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 60,
    backgroundColor: "#ecf0f1",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  weekType: {
    fontWeight: "bold",
  },
  title: {
    color: "#27ae60",
  },
  plus: {
    textAlign: "center",
    fontSize: 24,
    // fontWeight: "bold",
  },
});

export default WeekWidget;
