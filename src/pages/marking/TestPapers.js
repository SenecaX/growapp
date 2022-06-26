import AddStudentForm from "../../components/marking/AddStudentForm";
import { useNavigation } from "@react-navigation/native";
import { postStudent } from "../../util/httpMarking";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

function TestPapers(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrator mode</Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("../test.pdf")}
      >
        example
      </Text>

      <Uploady
        destination={{
          url: `https://api.cloudinary.com/v1_1/dpwvv3be4/upload`,

          params: {
            upload_preset: "pdfovy6l",
          },
        }}
      >
        <UploadButton />
      </Uploady>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default TestPapers;
