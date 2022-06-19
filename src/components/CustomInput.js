import { StyleSheet, View, TextInput, Text } from "react-native";
import Title from "../components/Title";

function CustomInput({ label, textInputConfig }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 16,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#000",
    marginBottom: 4,
    flex: 1,
  },
  input: {
    backgroundColor: "#EEE",
    padding: 6,
    fontSize: 18,
    borderRadius: 6,
    color: "black",
    flex: 3,
  },
});

export default CustomInput;
