import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
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

function Diary(props) {
  console.log("props :>> ", props);

  const diary = props.route.params;

  console.log("diary :>> ", diary);
  useEffect(() => {
    async function getDiariesByName() {
      const diaries = await getDiariesByKey();
    }

    getDiariesByName();
  }, []);

  const data = [
    {
      key: 1,
      title: "Week 0",
      weekType: "Ger",
    },
    {
      key: 2,
      title: "Week 1",
      weekType: "Veg",
    },
    {
      key: 3,
      title: "Week 2",
      weekType: "Veg",
    },
    {
      key: 4,
      title: "Week 3",
      weekType: "Veg",
    },
    {
      key: 5,
      title: "Week 6",
      weekType: "Veg",
    },
    {
      key: 6,
      title: "Week 6",
      weekType: "Flo",
    },
    {
      key: 7,
      title: "Week 7",
      weekType: "Flo",
    },
  ];

  const carouselItems = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

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
                type={diary.diaryInfo.roomType}
              />
            </View>

            <View style={styles.diaryWidget}>
              <DiaryTopInfoWidget
                src={require("../../assets/icons/watering.png")}
                label="Watering"
                type={diary.diaryInfo.wateringType}
              />
            </View>

            <View>
              <DiaryTopInfoWidget
                src={require("../../assets/icons/medium.png")}
                label="Medium"
                type={diary.diaryInfo.mediumType}
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionB}>
          <View style={styles.title1}>
            <Title2 title="Your journals" />
          </View>

          {/* <WeekWidget title="Week 1" weekType="Ger" /> */}

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={(itemData) => {
              return (
                <WeekWidget
                  weekType={itemData.item.weekType}
                  title={itemData.item.title}
                />
              );
            }}
          />

          <View></View>
        </View>

        <View style={styles.sectionD}>
          <View>
            <Title2 title="Grow Conditions" />
          </View>
          <PlantGrowthStatusForm />
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
});

export default Diary;
