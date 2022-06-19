import { StyleSheet, View, Text } from "react-native";
import Diary from "./src/pages/Diary";
import Home from "./src/pages/Home";
import NewDiary from "./src/pages/NewDiary";
import AddNewClass from "./src/pages/AddNewClass";
import MarkingHome from "./src/pages/MarkingHome";
import Marking from "./src/pages/Marking";
import GerminationScreen from "./src/pages/GerminationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.appContainer}>
    //   <GerminationScreen />
    // </View>

    <NavigationContainer style={styles.appContainer}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddNewClass" component={AddNewClass}></Stack.Screen>
        <Stack.Screen name="MarkingHome" component={MarkingHome}></Stack.Screen>

        <Stack.Screen name="Marking" component={Marking}></Stack.Screen>

        <Stack.Screen name="NewDiary" component={NewDiary}></Stack.Screen>

        <Stack.Screen name="Home" component={Home}></Stack.Screen>

        <Stack.Screen
          name="GerminationScreen"
          component={GerminationScreen}
        ></Stack.Screen>
        <Stack.Screen name="Diary" component={Diary}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
