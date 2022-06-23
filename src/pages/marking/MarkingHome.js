import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardButton from "../../components/marking/CardButton";

function MarkingHome(props) {
  const navigation = useNavigation();

  function goToAddClass() {
    navigation.navigate("AddClass");
  }

  function goToAddStudent() {
    navigation.navigate("AddStudent");
  }

  function goToMarkingView() {
    navigation.navigate("MarkingView");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {/* 
      <View style={styles.btbContainer}>
        <View style={styles.topSide}>
          <CardButton
            btnName="Add class"
            style={styles.leftBtn}
            goToScreen={goToAddClass}
          />

          <CardButton btnName="Add student" goToScreen={goToAddStudent} />
        </View>

        <View style={styles.topSide}>
          <CardButton btnName="Add educator" style={styles.leftBtn} />

          <CardButton btnName="Settings" />
        </View>
      </View> */}

      <View style={styles.btbContainer}>
        <View style={styles.topSide}>
          <CardButton
            btnName="Markings"
            style={styles.leftBtn}
            goToScreen={goToMarkingView}
          />

          <CardButton btnName="Analytics" goToScreen={goToAddStudent} />
        </View>

        <View style={styles.topSide}>
          <CardButton btnName="Test papers" style={styles.leftBtn} />

          <CardButton btnName="Settings" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  topSide: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomSide: {
    flexDirection: "row",
  },
  leftBtn: {},
});

export default MarkingHome;
