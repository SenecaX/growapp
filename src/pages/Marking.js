import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import CustomInput from "../components/CustomInput";

function Marking(props) {
  return (
    <View style={styles.container}>
      <Title title="Marking" />

      <Text>Marking page</Text>
      <CustomInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
  },
  titleContainer: {},
});

export default Marking;
