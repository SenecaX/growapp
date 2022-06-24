import { StyleSheet, View, Text } from "react-native";
import DiaryTopInfoWidget from "../components/DiaryTopInfoWidget";
import Title from "../components/Title";
import Title2 from "../components/Title2";
import WeekWidget from "../components/WeekWidget";
import CustomLargeButton from "../components/CustomLargeButton";
import Tags from "../components/Tags";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

function GermScreen(props) {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    germinationType: {
      value: "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const data = {
      germinationType: inputs.germinationType,
    };

    const germinationTypeIsValid = data.germinationType.length > 0;

    if (!germinationTypeIsValid) {
      setInputs((curInputs) => {
        return {
          name: { value: curInputs.name.value, isValid: nameIsValid },
          germinationType: {
            value: curInputs.germinationType.value,
            isValid: germinationTypeIsValid,
          },
        };
      });
    }

    const formIsInvalid = !inputs.name.isValid;
  }

  const testNavigate = (data) => {
    // navigation.navigate("Diary");
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionA}>
        <Title title="Germination screen" />
        <View style={styles.diaryWidgetContainer}>
          <View style={styles.diaryWidget}>
            <DiaryTopInfoWidget
              src={require("../../assets/icons/room.png")}
              label="Room type"
              type="Indoor"
            />
          </View>

          <View style={styles.diaryWidget}>
            <DiaryTopInfoWidget
              src={require("../../assets/icons/watering.png")}
              label="Watering"
              type="Manual"
            />
          </View>

          <View>
            <DiaryTopInfoWidget
              src={require("../../assets/icons/medium.png")}
              label="Medium"
              type="Soil"
            />
          </View>
        </View>
      </View>

      <View style={styles.sectionB}>
        <View style={styles.title1}>
          <Title2 title="Weeks" />

          {/* <WeekWidget weekType="" title="" plus="+" show={true} /> */}

          <View style={styles.weekWidgetContainer}>
            <Text style={styles.weekType}>Germ</Text>
            <Text style={styles.title}>Week 0</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionC}>
        <Title2 title="Photos" />

        <View style={styles.photoBtnContainer}>
          <CustomLargeButton
            name="Add photos"
            onPress={testNavigate()}
            color="#27ae60"
          />
        </View>
      </View>

      <View style={styles.sectionD}>
        <Title2 title="Germination method" />

        <View style={styles.tagContainer}>
          <Text style={styles.label}>Medium type</Text>
          <Picker
            selectedValue={inputs.germinationType.value}
            onValueChange={inputChangeHandler.bind(this, "germinationType")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item
              label="Please select the medium type."
              value="Unknown"
            />
            <Picker.Item label="Hydro" value="Hydro" />
            <Picker.Item label="Soil" value="Soil" />
            <Picker.Item label="Clay" value="Clay" />
          </Picker>
        </View>

        <View style={styles.photoBtnContainer}>
          <CustomLargeButton
            name="Save"
            onPress={testNavigate()}
            color="#27ae60"
          />
        </View>

        {/* <View style={styles.tagContainer}>
          <Tags name="Paper towel" width="40%" />
          <Tags name="Glass of water" width="50%" />
          <Tags name="Rockwool cube" width="50%" />
          <Tags name="Peat pellet" width="40%" />
          <Tags name="Directly in substrate" width="70%" />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  sectionA: {
    alignItems: "center",
  },
  diaryWidgetContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
  },
  diaryWidget: {
    paddingBottom: 30,
  },
  sectionB: {
    alignItems: "center",
  },
  title1: {
    marginBottom: 10,
  },
  sectionC: {
    alignItems: "center",
    marginTop: 20,
  },
  photoBtnContainer: {
    width: "80%",
    marginTop: 20,
  },
  sectionD: {
    alignItems: "center",
    marginTop: 30,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  picker: {
    // marginVertical: 30,
    // width: 300,
    // padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    flex: 2,
    fontSize: 12,
  },
  label: {
    flex: 1,
  },
  weekWidgetContainer: {
    backgroundColor: "#2ecc71",
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default GermScreen;
