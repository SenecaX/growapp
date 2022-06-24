import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Modal,
  Pressable,
  Alert,
  Text,
} from "react-native";
import Title from "../components/Title";
import Title2 from "../components/Title2";
import CustomButton from "../components/CustomButton";
import CustomSearch from "../components/CustomSearch";
import DiaryWidget from "../components/DiaryWidget";
import CustomModal from "../components/CustomModal";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { post, getDiariesWidgetInfo, getDiaries } from "../util/http";
import { useEffect } from "react";

function HomeScreen() {
  const navigation = useNavigation();
  const [diaries, setDiaries] = useState([]);

  function goToNewDiaryScreen() {
    navigation.navigate("NewDiary");
  }

  useEffect(() => {
    async function getDiaries1() {
      const diaries = await getDiariesWidgetInfo();
      setDiaries(diaries);
    }

    getDiaries1();
  }, []);

  function goToDiary(index) {
    const selectedDiary = diaries[index];
    navigation.navigate("Diary", selectedDiary);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.sectionA}>
        <Title title="Home" />

        <CustomSearch placeholder="search diaries..." />

        <View style={styles.subSectionA}>
          <Title2 title="Your journals" />
          <CustomButton
            name="Add new"
            style={styles.customSearch}
            goToNewDiaryScreen={goToNewDiaryScreen}
          />
        </View>
      </View>

      <View style={styles.subSectionB}>
        <ScrollView>
          <View style={styles.diaryWidgetContainer}>
            {diaries &&
              diaries.map((el, index) => {
                return (
                  <DiaryWidget
                    src={el.imgSrc}
                    title={el.title}
                    goToDiary={() => goToDiary(index)}
                    week={el.week}
                    key={`${index} ${el.title}`}
                    style={styles.listItem}
                  />
                );
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 50,
  },
  sectionA: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  subSectionA: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 20,
  },
  customSearch: {
    width: "100%",
  },
  subSectionB: {
    height: "100%",
  },
  listItem: {
    // marginHorizontal: 20,
  },
  diaryWidgetContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
