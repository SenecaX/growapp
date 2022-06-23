import { StyleSheet, View, Text } from "react-native";
import MarkingViewForm from "../../components/marking/MarkingViewForm";
import TableView from "../../components/marking/TableView";
import { postStudentMarking } from "../../util/httpMarking";

function MarkingView(props) {
  async function onSubmit(data) {
    const id = await post(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>Marking View</Text>
      <MarkingViewForm onSubmit={onSubmit} />
      <TableView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default MarkingView;
