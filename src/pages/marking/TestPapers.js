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
  Pressable,
} from "react-native";

import { useItemFinishListener, useRequestPreSend } from "@rpldy/uploady";
import { useContext, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";

function TestPapers(props) {
  useEffect(() => {}, []);

  const SignedUploadButton = () => {
    // useRequestPreSend(async ({ options }) => {
    //   const timestamp = Date.now();

    //   const response = await fetch(
    //     "https://api.cloudinary.com/v1_1/dpwvv3be4/upload",
    //     {
    //       method: "POST",
    //       body: {
    //         //  param
    //         upload_preset: UPLOAD_PRESET,
    //         timestamp,
    //       },
    //     }
    //   );
    //   console.log("response :>> ", response);

    //   const responseJson = await response.json();
    //   console.log("responseJson :>> ", responseJson);

    //   return {
    //     options: {
    //       destination: {
    //         params: {
    //           signature: responseJson.signature,
    //           upload_preset: UPLOAD_PRESET,

    //           timestamp,
    //           api_key: API_KEY,
    //         },
    //       },
    //     },
    //   };
    // });

    useItemFinishListener((item) => {
      console.log(
        `item ${item.id} finished uploading, response was: `,
        item.uploadResponse,
        item.uploadStatus
      );
    });

    return (
      <UploadButton>
        <Text>Upload papers</Text>
      </UploadButton>
    );
  };

  function download() {
    FileSystem.downloadAsync(
      "http://techslides.com/demos/sample-videos/small.mp4",
      FileSystem.documentDirectory + "small.mp4"
    )
      .then(({ uri }) => {
        console.log("Finished downloading to ", uri);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        {/* <UploadButton /> */}
        <SignedUploadButton />
      </Uploady>

      <Pressable onPress={download}>
        <Text>test</Text>
      </Pressable>
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
