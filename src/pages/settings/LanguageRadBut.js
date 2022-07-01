import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { languageOpts, SELECTED_LANGUAGE } from '../../constants/General';
import { Colors } from "../../constants/styles";
import { Label } from '../../constants/Label';

function LanguageRadioButView(props) {
  const [selectedLanguage, setSelectedLanguage] = useState(window.localStorage.getItem(SELECTED_LANGUAGE));
  const selectedLeagueIndex = languageOpts.findIndex(language => language.value === window.localStorage.getItem(SELECTED_LANGUAGE));

  function selectedLanguageOpts(value) {
    window.localStorage.setItem(SELECTED_LANGUAGE, value);
    setSelectedLanguage(value);
  }

  return (
    <View>
      <Text style={styles.title}>{Label[selectedLanguage].language}</Text>
      <RadioForm
        radio_props={languageOpts}
        selectedButtonColor={Colors.primary500}
        buttonColor={Colors.primary500}
        initial={selectedLeagueIndex} //initial value of this group
        onPress={(value) => {
          selectedLanguageOpts(value);
        }} //if the user changes options, set the new value
      />
    </View>
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