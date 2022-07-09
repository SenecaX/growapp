import { StyleSheet, Text, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { languageOpts, SELECTED_LANGUAGE } from '../../constants/General';
import { Colors } from "../../constants/styles";
import { Label } from '../../constants/Label';

function LanguageRadioButView(props) {
  const selectedLanguageIndex = languageOpts.findIndex(language => language.value === props.selectedLanguage);

  function selectedLanguageOpts(value) {
    props.setSelectedLanguage(value);
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
      <Text style={styles.title}>{Label[props.selectedLanguage].language}</Text>
      <RadioForm
        radio_props={languageOpts}
        selectedButtonColor={Colors.primary500}
        buttonColor={Colors.primary500}
        selectedLabelColor={Colors[props.selectedTheme].text}
        labelColor={Colors[props.selectedTheme].text}
        initial={selectedLanguageIndex} //initial value of this group
        onPress={(value) => {
          selectedLanguageOpts(value);
        }} //if the user changes options, set the new value
      />
    </View >
  );
}

export default LanguageRadioButView;