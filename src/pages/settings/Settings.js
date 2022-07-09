import { StyleSheet, Text, View } from "react-native";
import LanguageRadioButView from "./LanguageRadBut";
import ThemeRadioButView from "./ThemeRadBut";

function SettingView(props) {
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

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default SettingView;
