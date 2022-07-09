import { StyleSheet, Text, View } from "react-native";
import LanguageRadioButView from "./LanguageRadBut";
import ThemeRadioButView from "./ThemeRadBut";
import { Colors } from "../../constants/styles";

function SettingView(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors[props.selectedTheme].background,
      height: "100%",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#27ae60",
      paddingBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <LanguageRadioButView
        selectedLanguage={props.selectedLanguage}
        selectedTheme={props.selectedTheme}
        setSelectedLanguage={props.setSelectedLanguage}
      />
      <ThemeRadioButView
        selectedTheme={props.selectedTheme}
        selectedLanguage={props.selectedLanguage}
        setSelectedTheme={props.setSelectedTheme}
      />
    </View>
  );
}

export default SettingView;
