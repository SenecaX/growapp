import { StyleSheet, View } from "react-native";
import DiaryTopInfoWidget from "../components/DiaryTopInfoWidget";
import Title from "../components/Title";
import Title2 from "../components/Title2";
import WeekWidget from "../components/WeekWidget";
import CustomLargeButton from "../components/CustomLargeButton";
import Tags from "../components/Tags";
import { useNavigation } from "@react-navigation/native";

function GerminationScreen(props) {
  const navigation = useNavigation();

  const testNavigate = (data) => {
    navigation.navigate("Diary");
  };

  return (
    <View style={styles.titleContainer}>
      <View style={styles.sectionA}>
        <Title title="Lettuce Grow #1" />
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

          <WeekWidget weekType="" title="" plus="+" show={true} />
        </View>
      </View>

      <View style={styles.sectionC}>
        <Title2 title="Photos" />

        <View style={styles.photoBtnContainer}>
          <CustomLargeButton name="Add photos" onPress={testNavigate()} />
        </View>
      </View>

      <View style={styles.sectionD}>
        <Title2 title="Germination method" />

        <View style={styles.tagContainer}>
          <Tags name="Paper towel" width="40%" />
          <Tags name="Glass of water" width="50%" />
          <Tags name="Rockwool cube" width="50%" />
          <Tags name="Peat pellet" width="40%" />
          <Tags name="Directly in substrate" width="70%" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
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
  },
});

export default GerminationScreen;
