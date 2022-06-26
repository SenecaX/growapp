import { StyleSheet, View, Text } from "react-native";
import MarkingViewForm from "../../components/marking/MarkingViewForm";
import TableView from "../../components/marking/TableView";
import { getMarkings } from "../../util/httpMarking";
import { useContext, useEffect, useState } from "react";

function AddMarkingView(props) {
  const [markings, setMarkings] = useState("");
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    async function getMarkingsFromBack() {
      const m = await getMarkings();
      setMarkings(m);
    }

    getMarkingsFromBack();
  }, []);

  function onSubmit(data) {
    // allMarkings = markings[0];

    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        delete data[key];
      }
    });

    const keys = Object.keys(data);

    let filteredData = [];

    const copyMarkings = [...markings];

    copyMarkings.filter((marking) => {
      keys.filter((key, index) => {
        if (marking[key] === data[key]) {
          filteredData.push({ ...marking });
        }
      });
    });

    setMarkings(filteredData);

    setShowTable(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>Marking View</Text>
      <MarkingViewForm
        onSubmit={onSubmit}
        isTermShown={true}
        btnTitle="Search"
      />
      {<TableView markings={markings} />}
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

export default AddMarkingView;
