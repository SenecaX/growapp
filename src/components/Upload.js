import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import ImagePicker from "react-native-image-picker";

function Upload() {
  function selectPhotoTapped() {
    const options = {
      title: "Select Photo",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    console.log("ImagePicker :>> ", ImagePicker);
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        };
      }
    });
  }
  return (
    <View>
      <View style={styles.imageContainer}></View>
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadContainerTitle}>
          ImagePicker to Cloudinary
        </Text>
        <TouchableOpacity
          onPress={selectPhotoTapped}
          style={styles.uploadButton}
        >
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#fe5b29",
    height: Dimensions.get("window").height,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  uploadContainer: {
    backgroundColor: "#f6f5f8",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 200,
  },
  uploadContainerTitle: {
    alignSelf: "center",
    fontSize: 25,
    margin: 20,
    fontFamily: "Roboto",
  },
  uploadButton: {
    borderRadius: 16,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    margin: 10,
    padding: 10,
    backgroundColor: "#fe5b29",
    width: Dimensions.get("window").width - 60,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default Upload;
