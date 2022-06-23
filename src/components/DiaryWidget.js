import { StyleSheet, View, Text, Image, Pressable } from "react-native";

function DiaryWidget(props) {
  return (
    <Pressable
      style={styles.titleContainer}
      onPress={props.goToDiary}
      key={props.title}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.src} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.week}>{props.week[props.week.length -1].weekNum}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: 100,
    margin: 10,
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
  imageContainer: {},
});

export default DiaryWidget;
