import { StyleSheet, View, Text, Image } from "react-native";

function DiaryWidget(props) {
  console.log("props :>> ", props);
  return (
    <View style={styles.titleContainer}>
      <View>
        <Image style={styles.image} source={props.src} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.week}>{props.week}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: 100,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 10,
  },
  week: {},
  image: {
    width: 100,
    height: 100,
  },
});

export default DiaryWidget;
