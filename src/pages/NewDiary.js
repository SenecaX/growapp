import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import NewDiaryForm from "../components/NewDiaryForm";
import { post } from "../util/http";
import { useNavigation } from "@react-navigation/native";

function NewDiary(props) {
  console.log("props :>> ", props);
  const navigation = useNavigation();

  async function confirmHandler(data) {
    const id = await post(data);
  }

  function onCancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Title title="New Diary" />

      <NewDiaryForm onSubmit={confirmHandler} onCancel={onCancel} />
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
