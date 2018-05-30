import React from 'react'
import {
  Button,
  Platform,
  StatusBar,
  Slider,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import CircularSlider from '../CircularSlider.js'
import Time from '../Time.js'
import {
  updatePitchTime,
  updateCustomVibrationTime,
  addCustomVibration
} from '../actions.js'

const Start = ({
  navigation,
  updatePitchTime,
  pitchTime,
  customVibrations,
  addCustomVibration,
  updateCustomVibrationTime,
}) =>
  <View style={styles.container}>
    <Text style={styles.headerText}>
      Pitch Timer
    </Text>
    <View>
      <Time timeInSeconds={pitchTime} />
      <Slider
        style={styles.slider}
        maximumValue={600}
        value={pitchTime}
        onValueChange={updatePitchTime}
        step={5}
      />
    </View>
    <View>
      <Text style={styles.header2Text}>
        Custom Vibrations
      </Text>
      {customVibrations.length > 0 ? (
        customVibrations.map((customVibrationTime, index) => (
          <View key={index}>
            <Time timeInSeconds={customVibrationTime} />
            <Slider
              maximumValue={pitchTime}
              value={customVibrationTime}
              onValueChange={updateCustomVibrationTime(index)}
              step={5}
            />
          </View>
        ))
      ) : (
        <Text>no custom vibrations yet</Text>
      )}
      <Button
        onPress={addCustomVibration}
        title="Add Custom Vibration"
      />
    </View>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        onPress={() => navigation.navigate('Timer')}
        title="Start Timer"
      />
    </View>
  </View>

const mapStateToProps = ({ pitchTime, customVibrations }) => ({
  pitchTime,
  customVibrations,
})

const mapDispatchToProps = dispatch => ({
  updatePitchTime: time => dispatch(updatePitchTime(time)),
  addCustomVibration: () => dispatch(addCustomVibration()),
  updateCustomVibrationTime: index => time => dispatch(updateCustomVibrationTime(index, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Start)

const styles = StyleSheet.create({
  container: {
    paddingTop: 30 + ((Platform.OS === 'ios') ? 20 : StatusBar.currentHeight),
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  questionText: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  header2Text: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  italicText: {
    fontStyle: 'italic',
    fontSize: 18,
  },
})
