import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import NewDiaryForm from "../components/NewDiaryForm";
import { post } from "../util/http";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

function NewDiary(props) {

  const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      backgroundColor: Colors[props.selectedTheme].background,
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

export default NewDiary;
