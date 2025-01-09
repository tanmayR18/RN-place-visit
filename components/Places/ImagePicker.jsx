import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";

const ImagePicker = () => {
  const [status, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if (status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission",
        "You need to provide camera permission"
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
  }

  return (
    <View>
      <Pressable onPress={() => takeImageHandler()}>
        <Text>ImagePicker</Text>
      </Pressable>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
