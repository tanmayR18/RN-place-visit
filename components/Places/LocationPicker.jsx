import { Alert, StyleSheet, Text, View } from "react-native";
import React, { use } from "react";
import { Colors } from "../../contants/color";
import OutlineButton from "../UI/OutlineButton";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from 'expo-location'

const LocationPicker = () => {

    const [ status,  requestPermission] = useForegroundPermissions()

    async function verifyPermission() {
        console.log(status)
        if(status.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if(status.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission',
                'You need to give location permission to use this app'
            );
            return false;
        }
        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermission();
        if(!hasPermission){
            return;
        }
        const location = await getCurrentPositionAsync();
        console.log(location)
    }

    function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon={'location'} onPress={getLocationHandler}>
            Locate User
        </OutlineButton>
        <OutlineButton icon={'map'} onPress={pickOnMapHandler}>
            Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});
