import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {List} from '../../Home/PatientsArray';

const PatientVialsScreen = () => {
  return (
    <View style={styles.Container}>
      {List.map(item => (
        <ScrollView key={item.id}>
          <View>
            <Text>index</Text>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default PatientVialsScreen;
