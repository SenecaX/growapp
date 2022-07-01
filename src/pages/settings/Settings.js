import { StyleSheet, Text, View } from "react-native";
import LanguageRadioButView from './LanguageRadBut';

function SettingView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <LanguageRadioButView />
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
