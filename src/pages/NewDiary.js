import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import PlantGrowthStatusForm from "../components/PlantGrowthStatusForm";

function NewDiary(props) {
  return (
    <View style={styles.container}>
      <Title title="New Diary" />
      <PlantGrowthStatusForm />
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

export default NewDiary;
