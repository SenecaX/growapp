import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import NewDiaryForm from "../components/NewDiaryForm";

function NewDiary(props) {
  return (
    <View style={styles.container}>
      <Title title="New Diary" />

      <NewDiaryForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    width: "95%",
    alignItems: "center",
    // paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default NewDiary;
