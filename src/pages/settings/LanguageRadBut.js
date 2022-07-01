import { StyleSheet, Text, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { languageOpts, SELECTED_LANGUAGE } from '../../constants/General';
import { Colors } from "../../constants/styles";
import { Label } from '../../constants/Label';

function LanguageRadioButView(props) {
  const selectedLeagueIndex = languageOpts.findIndex(language => language.value === props.selectedLanguage);

  function selectedLanguageOpts(value) {
    window.localStorage.setItem(SELECTED_LANGUAGE, value);
    props.setSelectedLanguage(value);
  }

  return (
    < View >
        { console.log(props) }
      <Text style={styles.title}>{Label[props.selectedLanguage].language}</Text>
      <RadioForm
        radio_props={languageOpts}
        selectedButtonColor={Colors.primary500}
        buttonColor={Colors.primary500}
        initial={selectedLeagueIndex} //initial value of this group
        onPress={(value) => {
          selectedLanguageOpts(value);
        }} //if the user changes options, set the new value
      />
    </View >
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'rgba(21, 122, 103, 1)',
    paddingBottom: 10,
  },
});

export default LanguageRadioButView;