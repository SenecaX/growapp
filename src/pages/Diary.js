import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import Title from "../components/Title";
import Title2 from "../components/Title2";
import WeekWidget from "../components/WeekWidget";

import DiaryTopInfoWidget from "../components/DiaryTopInfoWidget";
import CarouselCards from "../components/CarouselCards";
import PlantGrowthStatusForm from "../components/PlantGrowthStatusForm";

import Carousel from "react-native-snap-carousel";
import { getDiariesByKey } from "../util/http";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { putNewWeek } from "../util/http";

function Diary(props) {
  const navigation = useNavigation();

  let diary = props.route.params || props.route.params.diary;

  console.log("diary :>> ", diary);

  let weekNumber = 0;
  let roomType = "No Data";
  let wateringType = "No Data";
  let mediumType = "No Data";
  let diaryWeek = diary.diaryInfo ? diary.week[weekNumber] : null;

  if (props.route.params.diary) {
    roomType = props.route.params.diary.diaryInfo.roomType;
    wateringType = props.route.params.diary.diaryInfo.wateringType;
    mediumType = props.route.params.diary.diaryInfo.mediumType;
  }

  let showBtns = props.route.params.showSubmitBtn === true ? true : false;

  useEffect(() => {
    async function getDiariesByName() {
      const diaries = await getDiariesByKey();
    }

    getDiariesByName();
  }, []);

  function onSubmit(data) {
    const id = data.id;
    const res = putNewWeek(data.diary.id, data.diary);
  }

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  function getWeekNum(weekNum) {}

  function goToNewWeekTypeScreen() {
    navigation.navigate("ChooseWeekType", diary);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionA}>
          <Title title="Diary" />
          <View style={styles.diaryWidgetContainer}>
            <View style={styles.diaryWidget}>
              <DiaryTopInfoWidget
                src={require("../../assets/icons/room.png")}
                label="Room type"
                type={roomType}
              />
            </View>

            <View style={styles.diaryWidget}>
              <DiaryTopInfoWidget
                src={require("../../assets/icons/watering.png")}
                label="Watering"
                type={wateringType}
              />
            </View>

            <View>
              <DiaryTopInfoWidget
                src={require("../../assets/icons/medium.png")}
                label="Medium"
                type={mediumType}
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionB}>
          <View style={styles.title1}>
            <Title2 title="Your journals" />
          </View>

          {/* <WeekWidget title="Week 1" weekType="Ger" /> */}

          <View style={styles.weekWidgetContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={diary.week}
              renderItem={(itemData) => {
                return (
                  <WeekWidget
                    weekType={itemData.item.type}
                    title={itemData.item.weekNum}
                    getWeek={getWeekNum}
                  />
                );
              }}
            />

            <View>
              <Pressable onPress={goToNewWeekTypeScreen}>
                <View>
                  <Text style={styles.plusLabel}>+</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.sectionD}>
          <View>
            <Title2 title="Grow Conditions" />
          </View>
          <PlantGrowthStatusForm
            defaultValues={diaryWeek}
            showBtns={showBtns}
            diary={diary}
            onSubmit={onSubmit}
          />
        </View>

        <View style={styles.sectionC}>
          {/* <View style={styles.gallery}></View> */}

          <SafeAreaView style={styles.container1}>
            <CarouselCards />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 50,
    // paddingTop: 50,
  },
  sectionA: {
    alignItems: "center",
    paddingTop: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
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
  gallery: {
    height: 200,
    width: 200,
    backgroundColor: "#DDD",
    marginVertical: 15,
  },
  title1: {
    marginBottom: 10,
  },
  sectionC: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  sectionD: {
    alignItems: "center",
    marginTop: 20,
  },
  weekWidgetContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusLabel: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Diary;
