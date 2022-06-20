import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Title from "../components/Title";
import Title2 from "../components/Title2";
import CustomButton from "../components/CustomButton";
import CustomSearch from "../components/CustomSearch";
import DiaryWidget from "../components/DiaryWidget";
import CustomModal from "../components/CustomModal";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  const data = [
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 1,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 2,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 3,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 4,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 5,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 6,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 7,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 8,
    },
    {
      title: "Lettuce grow #1",
      week: "Week 2",
      imgSrc: require("../../assets/duck.jpeg"),
      key: 9,
    },
  ];

  function openModal() {
    return (
      <CustomModal
        isVisible={true}
        textValue={"hi there"}
        message={"trying to make a basic component modal"}
      />
    );
  }

  function testNavigate() {
    console.log("testing");
    navigation.navigate("GerminationScreen");
  }

  function goToNewDiaryScreen() {
    navigation.navigate("NewDiary");
  }

  // const onSignInPressed = () => {
  //   console.log("GerminationScreen");
  //   navigation.navigate("GerminationScreen");
  // };

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
        {/* <FlatList
          alwaysBounceVertical={false}
          //   style={styles.listData}
          numColumns={3}
          data={data}
          renderItem={(itemData) => {
            return (
              <DiaryWidget
                src={itemData.item.imgSrc}
                title={itemData.item.title}
                week={itemData.item.week}
                style={styles.listItem}
              />
            );
          }}
        /> */}
        <ScrollView>
          <View style={styles.diaryWidgetContainer}>
            {data.map((el) => {
              return (
                <DiaryWidget
                  src={el.imgSrc}
                  title={el.title}
                  week={el.week}
                  key={el.key}
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

export default Home;

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
});
