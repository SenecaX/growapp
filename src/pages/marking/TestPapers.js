import { StyleSheet, View, Text } from "react-native";
import AddStudentForm from "../../components/marking/AddStudentForm";
import { useNavigation } from "@react-navigation/native";
import { postStudent } from "../../util/httpMarking";

function TestPapers(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrator mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default TestPapers;
