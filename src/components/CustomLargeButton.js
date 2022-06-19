import { StyleSheet, View, Text, Pressable } from "react-native";

function CustomLargeButton(props) {
  const onBtnPress = () => {};

  return (
    <Pressable onPress={onBtnPress} style={styles.btn}>
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  btn: {
    backgroundColor: "#27ae60",
    padding: 10,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default CustomLargeButton;
