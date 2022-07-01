// import { StyleSheet, View, Text } from "react-native";
// import Diary from "./src/pages/Diary";
// import Home from "./src/pages/Home";
// import NewDiary from "./src/pages/NewDiary";
// import AddNewClass from "./src/pages/AddNewClass";
// import MarkingHome from "./src/pages/MarkingHome";
// import Marking from "./src/pages/Marking";
// import GerminationScreen from "./src/pages/GerminationScreen";
// import GermScreen from "./src/pages/GermScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     // <View style={styles.appContainer}>
//     //   <GerminationScreen />
//     // </View>

//     <NavigationContainer style={styles.appContainer}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Diary" component={Diary}></Stack.Screen>

//         <Stack.Screen name="GermScreen" component={GermScreen}></Stack.Screen>

//         <Stack.Screen name="AddNewClass" component={AddNewClass}></Stack.Screen>

//         <Stack.Screen name="Home" component={Home}></Stack.Screen>

//         <Stack.Screen
//           name="GerminationScreen"
//           component={GerminationScreen}
//         ></Stack.Screen>

//         <Stack.Screen name="NewDiary" component={NewDiary}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
// });

import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

import LoginScreen from "./src/pages/LoginScreen";
import SignupScreen from "./src/pages/SignupScreen";
import WelcomeScreen from "./src/pages/WelcomeScreen";
import HomeScreen from "./src/pages/HomeScreen";
import { Colors } from "./src/constants/styles";
import AuthContextProvider, { AuthContext } from "./src/store/auth-context";
import IconButton from "./src/components/IconButton";
import Diary from "./src/pages/Diary";
import NewDiary from "./src/pages/NewDiary";
import Upload from "./src/components/Upload";
import GermScreen from "./src/pages/GermScreen";
import MarkingHome from "./src/pages/marking/MarkingHome";
import AddClass from "./src/pages/marking/AddClass";
import AddStudent from "./src/pages/marking/AddStudent";
import MarkingView from "./src/pages/marking/MarkingView";
import AnalyticsView from "./src/pages/marking/AnalyticsView";
import ChooseWeekType from "./src/pages/ChooseWeekType";
import TestPapers from "./src/pages/marking/TestPapers";
import AddMarkingView from "./src/pages/marking/AddMarkingView";
import ViewMarkingView from "./src/pages/marking/ViewMarkingView";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Marking Home"
        component={MarkingHome}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="MarkingView"
        component={MarkingView}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="SettingView"
        component={SettingView}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="TestPapers"
        component={TestPapers}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="AddMarkingView"
        component={AddMarkingView}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ViewMarkingView"
        component={ViewMarkingView}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="NewDiary"
        component={NewDiary}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ChooseWeekType"
        component={ChooseWeekType}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Diary"
        component={Diary}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="AnalyticsView"
        component={AnalyticsView}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="AddClass"
        component={AddClass}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="AddStudent"
        component={AddStudent}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="GerminationScreen"
        component={GermScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
