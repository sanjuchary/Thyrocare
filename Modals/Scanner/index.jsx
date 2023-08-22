import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Colors} from '../../Constants/colors';

const ScannerModal = () => {
  return (
    <ScrollView>
      <QRCodeScanner
        onRead={this.onSuccess}
        //   flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        // cameraContainerStyle={styles.Camera}
        reactivateTimeout={500}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Camera: {
    // width: '100%',
    // height: '1%',
    // backgroundColor: Colors.black,
  },
});

export default ScannerModal;
