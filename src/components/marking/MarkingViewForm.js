import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function MarkingViewForm({ onSubmit, onCancel, defaultValues }) {
  const [inputs, setInputs] = useState({
    grade: {
      value: defaultValues ? defaultValues.grade : "",
      isValid: true,
    },
    section: {
      value: defaultValues ? defaultValues.section : "",
      isValid: true,
    },
    subject: {
      value: defaultValues ? defaultValues.subject : "",
      isValid: true,
    },
    student: {
      value: defaultValues ? defaultValues.student : "",
      isValid: true,
    },
    term: {
      value: defaultValues ? defaultValues.term : "",
      isValid: true,
    },
    marks: {
      value: defaultValues ? defaultValues.marks : "",
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
      grade: inputs.grade.value,
      section: inputs.section.value,
      subject: inputs.subject.value,
      student: inputs.student.value,
      term: inputs.term.value,
      marks: inputs.marks.value,
    };

    console.log("data :>> ", data);

    const gradeIsValid = data.diaryInfo.grade.value !== "";
    const sectionIsValid = data.diaryInfo.section.value !== "";
    const subjectIsValid = data.diaryInfo.subject.value !== "";
    const studentIsValid = data.diaryInfo.student.value !== "";
    const termIsValid = data.diaryInfo.term.value !== "";
    const marksIsValid = data.diaryInfo.marks.value !== "";

    if (!nameIsValid) {
      setInputs((curInputs) => {
        return {
          grade: {
            value: curInputs.grade.value,
            isValid: gradeIsValid,
          },
          subject: {
            value: curInputs.subject.value,
            isValid: subjectIsValid,
          },
          section: {
            value: curInputs.section.value,
            isValid: sectionIsValid,
          },
          student: {
            value: curInputs.student.value,
            isValid: studentIsValid,
          },
          term: {
            value: curInputs.term.value,
            isValid: termIsValid,
          },
          marks: {
            value: curInputs.marks.value,
            isValid: marksIsValid,
          },
        };
      });
      return;
    }

    onSubmit(data);
  }

  const formIsInvalid = !inputs.grade.isValid || !inputs.section.isValid;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.selectContainer}>
          <Text style={styles.label}>Grade</Text>
          <Picker
            selectedValue={inputs.grade.value}
            onValueChange={inputChangeHandler.bind(this, "grade")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the grade." value="Unknown" />
            <Picker.Item label="Grade 7" value="Grade7" />
            <Picker.Item label="Grade 8" value="Grade8" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>Section</Text>
          <Picker
            selectedValue={inputs.section.value}
            onValueChange={inputChangeHandler.bind(this, "section")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the section." value="Unknown" />
            <Picker.Item label="Red" value="red" />
            <Picker.Item label="Blue" value="blue" />
            <Picker.Item label="Yellow" value="yellow" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>subject</Text>
          <Picker
            selectedValue={inputs.subject.value}
            onValueChange={inputChangeHandler.bind(this, "subject")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the subject." value="Unknown" />
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Maths" value="maths" />
            <Picker.Item label="French" value="french" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>student</Text>
          <Picker
            selectedValue={inputs.student.value}
            onValueChange={inputChangeHandler.bind(this, "student")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select a student." value="Unknown" />
            <Picker.Item label="Jack Sparrow" value="jacksparrow" />
            <Picker.Item label="James Bond" value="jamesbond" />
            <Picker.Item label="John" value="Terry" />
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>term</Text>
          <Picker
            selectedValue={inputs.term.value}
            onValueChange={inputChangeHandler.bind(this, "term")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select a term." value="Unknown" />
            <Picker.Item label="Term 1" value="term1" />
            <Picker.Item label="Term 2" value="term2" />
            <Picker.Item label="Term 3" value="term3" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            label="marks"
            invalid={!inputs.marks.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "marks"),
              value: inputs.marks.value,
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
          {/* <Button onPress={onCancel} title="Cancel"></Button> */}
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

export default MarkingViewForm;
