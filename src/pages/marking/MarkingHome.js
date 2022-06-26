import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardButton from "../../components/marking/CardButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";

function MarkingHome(props) {
  const navigation = useNavigation();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("role").then((res) => {
      if (res === "ADMIN") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  function goToAddClass() {
    navigation.navigate("AddClass");
  }

  function goToAddStudent() {
    navigation.navigate("AddStudent");
  }

  function goToMarkingView() {
    navigation.navigate("MarkingView");
  }

  function goToAnalytics() {
    navigation.navigate("AnalyticsView");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {isAdmin && (
        <View style={styles.btbContainer}>
          <View style={styles.topSide}>
            <CardButton
              btnName="Add grade"
              style={styles.leftBtn}
              goToScreen={goToAddClass}
            />

            <CardButton btnName="Add student" goToScreen={goToAddStudent} />
          </View>

          <View style={styles.topSide}>
            <CardButton btnName="Add educator" style={styles.leftBtn} />

            <CardButton btnName="Settings" />
          </View>
        </View>
      )}

      {!isAdmin && (
        <View style={styles.btbContainer}>
          <View style={styles.topSide}>
            <CardButton
              btnName="Markings"
              style={styles.leftBtn}
              goToScreen={goToMarkingView}
            />

            <CardButton btnName="Analytics" goToScreen={goToAnalytics} />
          </View>

          <View style={styles.topSide}>
            <CardButton btnName="Test papers" style={styles.leftBtn} />

            <CardButton btnName="Settings" />
          </View>
        </View>
      )}
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
