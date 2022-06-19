import { StyleSheet, View, Text } from "react-native";
import CustomInput from "../components/CustomInput";

function PlantGrowthStatusForm() {
  //   const [name, setName] = useState("");

  function nameChangeHandler(enteredName) {
    // setName(enteredName);
  }

  return (
    <View>
      <Text>testing</Text>
      <CustomInput
        label="name"
        textInputConfig={{
          keyboardType: "default",
          onChangeText: nameChangeHandler,
          value: name,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default PlantGrowthStatusForm;
