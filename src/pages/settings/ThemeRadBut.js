import { StyleSheet, Text, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { themeOpts, SELECTED_THEME } from '../../constants/General';
import { Colors } from "../../constants/styles";
import { Label } from '../../constants/Label';

function ThemeRadioButView(props) {
  const selectedThemeIndex = themeOpts[props.selectedLanguage].findIndex(theme => theme.value === props.selectedTheme);

  function selectedThemeOpts(value) {
    window.localStorage.setItem(SELECTED_THEME, value);
    props.setSelectedTheme(value);
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: Colors[props.selectedTheme].title,
      paddingBottom: 10,
    },
  });

  return (
    < View >
      {console.log(Colors[props.selectedTheme].text)}
      <Text style={styles.title}>{Label[props.selectedLanguage].theme}</Text>
      <RadioForm
        radio_props={themeOpts[props.selectedLanguage]}
        selectedButtonColor={Colors.primary500}
        buttonColor={Colors.primary500}
        selectedLabelColor={Colors[props.selectedTheme].text}
        labelColor={Colors[props.selectedTheme].text}
        initial={selectedThemeIndex} //initial value of this group
        onPress={(value) => {
          selectedThemeOpts(value);
        }} //if the user changes options, set the new value
      />
    </View >
  );
}

export default ThemeRadioButView;