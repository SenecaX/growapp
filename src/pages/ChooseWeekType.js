import { StyleSheet, View, Text } from "react-native";
import CustomLargeButton from "../components/CustomLargeButton";
import { useNavigation } from "@react-navigation/native";

function ChooseWeekType(props) {
  const navigation = useNavigation();

  function onBtnPressGermination() {
    navigation.navigate("GerminationScreen");
  }

  function onBtnPressVegetation() {
    navigation.navigate("Diary");
  }

  function onBtnPressFlowering() {
    navigation.navigate("Diary");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <View style={styles.btnContainer}>
        <CustomLargeButton
          name="Germination"
          style={[styles.customBtn, styles.germination]}
          color="#f1c40f"
          onBtnPress={onBtnPressGermination}
        />
        <CustomLargeButton
          name="Vegetative"
          style={[styles.customBtn, styles.vegetation]}
          color="#27ae60"
          onBtnPress={onBtnPressVegetation}
        />
        <CustomLargeButton
          name="Flowering"
          style={[styles.customBtn, styles.flowering]}
          color="#e74c3c"
          onBtnPress={onBtnPressFlowering}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Padding: 50,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  btnContainer: {
    width: "80%",
  },
  customBtn: {
    textAlign: "center",
    padding: 10,
  },
  germination: {},
});

export default ChooseWeekType;
