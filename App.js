import { StyleSheet, View, Text } from "react-native";
import Diary from "./src/pages/Diary";
import Home from "./src/pages/home/Home";
import NewDiary from "./src/pages/NewDiary";
import GerminationScreen from "./src/pages/GerminationScreen";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <GerminationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
