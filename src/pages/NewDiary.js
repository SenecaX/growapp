import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

function NewDiary(props) {
  return (
    <View style={styles.container}>
      <Title title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default NewDiary;
