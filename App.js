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
import AddClass from "./src/pages/marking/AddClass";
import AddStudent from "./src/pages/marking/AddStudent";
import AnalyticsView from "./src/pages/marking/AnalyticsView";
import ChooseWeekType from "./src/pages/ChooseWeekType";
import Profile from "./src/pages/Profile.js";
import TestPapers from "./src/pages/marking/TestPapers";
import AddMarkingView from "./src/pages/marking/AddMarkingView";
import ViewMarkingView from "./src/pages/marking/ViewMarkingView";
import SettingView from "./src/pages/settings/Settings";
import { Label } from "./src/constants/Label";
import {
  languageOpts,
  themeOpts,
} from "./src/constants/General";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function returnSettingsParam() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOpts[0].value
  );
  // define state for selected theme
  const [selectedTheme, setSelectedTheme] = useState(
    themeOpts[selectedLanguage][0].value
  );
  return {
    selectedLanguage,
    selectedTheme,
    setSelectedLanguage,
    setSelectedTheme,
  }
}

function MyTabs(props) {
  const { selectedLanguage, selectedTheme, setSelectedLanguage, setSelectedTheme } = returnSettingsParam();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Label[selectedLanguage].homeView}
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
      >
        {(props) => (
          <HomeScreen
            {...props}
            selectedLanguage={selectedLanguage}
            selectedTheme={selectedTheme}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
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
      >
        {(props) => (
          <Profile
            {...props}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name={Label[selectedLanguage].settingView}
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
      >
        {(props) => (
          <SettingView
            {...props}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

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

function AuthenticatedStack(props) {
  const authCtx = useContext(AuthContext);
  const { selectedLanguage, selectedTheme, setSelectedLanguage, setSelectedTheme } = returnSettingsParam();

  // // insert default value for selected language in local storage
  // if (!window.localStorage.getItem(SELECTED_LANGUAGE)) {
  //   window.localStorage.setItem(SELECTED_LANGUAGE, languageOpts[0].value);
  // }
  // // insert default value for selected theme in local storage
  // if (!window.localStorage.getItem(SELECTED_THEME)) {
  //   window.localStorage.setItem(
  //     SELECTED_THEME,
  //     themeOpts[window.localStorage.getItem(SELECTED_LANGUAGE)][1].value
  //   );
  // }


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors[selectedTheme].background },
      }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />

      <Stack.Screen
        name={Label[selectedLanguage].newDiaryView}
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
      >
        {(props) => (
          <NewDiary
            {...props}
            selectedLanguage={selectedLanguage}
            selectedTheme={selectedTheme}
          />
        )}
      </Stack.Screen>

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
    </Stack.Navigator >
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
