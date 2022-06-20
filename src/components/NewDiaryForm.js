import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function NewDiaryForm({ onSubmit, onCancel, defaultValues }) {
  const [inputs, setInputs] = useState({
    name: {
      value: defaultValues ? defaultValues.name : "",
      isValid: true,
    },
    roomType: {
      value: defaultValues ? defaultValues.roomType : "",
      isValid: true,
    },
    wateringType: {
      value: defaultValues ? defaultValues.wateringType : "",
      isValid: true,
    },
    mediumType: {
      value: defaultValues ? defaultValues.mediumType : "",
      isValid: true,
    },
    vegetationLights: {
      value: defaultValues ? defaultValues.vegetationLights : "",
      isValid: true,
    },
    floweringLights: {
      value: defaultValues ? defaultValues.floweringLights : "",
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
      name: inputs.name,
      roomType: inputs.roomType,
      wateringType: inputs.wateringType,
      mediumType: inputs.roomType,
      vegetationLights: inputs.vegetationLights,
      floweringLights: inputs.floweringLights,
    };

    const nameIsValid = data.name.length > 0;
    const roomTypeIsValid = data.roomType.length > 0;
    const wateringTypeIsValid = data.wateringType.length > 0;
    const mediumTypeIsValid = data.mediumType.length > 0;
    const vegetationLightsIsValid = data.vegetationLights.length > 0;
    const floweringLightsIsValid = data.floweringLights.length > 0;

    if (!nameIsValid) {
      setInputs((curInputs) => {
        return {
          name: { value: curInputs.name.value, isValid: nameIsValid },
          roomType: {
            value: curInputs.roomType.value,
            isValid: roomTypeIsValid,
          },
          mediumType: {
            value: curInputs.mediumType.value,
            isValid: mediumTypeIsValid,
          },
          wateringType: {
            value: curInputs.wateringType.value,
            isValid: wateringTypeIsValid,
          },
          vegetationLights: {
            value: curInputs.vegetationLights.value,
            isValid: vegetationLightsIsValid,
          },
          floweringLights: {
            value: curInputs.floweringLights.value,
            isValid: floweringLightsIsValid,
          },
        };
      });
      return;
    }

    onSubmit(data);
  }

  const formIsInvalid =
    !inputs.name.isValid ||
    !inputs.roomType.isValid ||
    !inputs.wateringType.isValid ||
    !inputs.mediumType.isValid ||
    !inputs.vegetationLights.isValid ||
    !inputs.floweringLights.isValid;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.inputContainer}>
          <CustomInput
            label="name"
            invalid={!inputs.name.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "name"),
              value: inputs.name.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>Room type</Text>
          <Picker
            selectedValue={inputs.roomType.value}
            onValueChange={inputChangeHandler.bind(this, "roomType")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the room type." value="Unknown" />
            <Picker.Item label="Indoor" value="Indoor" />
            <Picker.Item label="Outdoor" value="Outdoor" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>Watering type</Text>
          <Picker
            selectedValue={inputs.wateringType.value}
            onValueChange={inputChangeHandler.bind(this, "wateringType")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item
              label="Please select the watering type."
              value="Unknown"
            />
            <Picker.Item label="Manual" value="Manual" />
            <Picker.Item label="Drip" value="Drip" />
            <Picker.Item label="Hydro" value="Hydro" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>Medium type</Text>
          <Picker
            selectedValue={inputs.mediumType.value}
            onValueChange={inputChangeHandler.bind(this, "mediumType")}
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

        <View>
          <CustomInput
            label="vegetationLights"
            invalid={!inputs.vegetationLights.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "vegetationLights"),
              value: inputs.vegetationLights.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="floweringLights"
            invalid={!inputs.floweringLights.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "floweringLights"),
              value: inputs.floweringLights.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={submitHandler} title="Submit"></Button>
          <Button onPress={onCancel} title="Cancel"></Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 8,
    fontSize: 8,
  },
  errorInput: {
    color: "red",
  },
  inputContainer: {
    width: 300,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    // marginVertical: 30,
    // width: 300,
    // padding: 10,
    // borderWidth: 1,
    borderColor: "#666",
    flex: 3,
    fontSize: 12,
  },

  label: {
    fontSize: 12,
    flex: 1,
  },
});

export default NewDiaryForm;
