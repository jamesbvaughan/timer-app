import React from 'react'
import {
  Button,
  Platform,
  Slider,
  StatusBar,
  Switch,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native'

export default class CreateTimer extends React.Component {
  constructor(props) {
    super(props)

    this.decrementSeconds = this.decrementSeconds.bind(this)
    this.onSliderValueChange = this.onSliderValueChange.bind(this)
    this.onPressStart = this.onPressStart.bind(this)
  }

  decrementSeconds() {
    if (this.state.secondsLeft > 0) {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1,
      })
    } else {
      Vibration.vibrate(1000)
      clearInterval(this.state.intervalId)
    }
  }

  onPressStart() {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId)
    }

    this.setState({
      secondsLeft: this.state.pitchTime,
      intervalId: setInterval(this.decrementSeconds, 1000),
    })
  }

  onSliderValueChange(value) {
    this.setState({
      pitchTime: value,
    })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Set Up
        </Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.questionText}>1 - Set overall pitch time</Text>
          <View style={styles.switchView}>
            <Text>{this.state.pitchTime}</Text>
            <Slider
              style={styles.slider}
              maximumValue={60}
              value={this.state.pitchTime}
              onValueChange={this.onSliderValueChange}
              step={1}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.questionText}>2 - When should it vibrate?</Text>
          <View style={styles.switchView}>
            <Switch />
            <Text>When there are 30 seconds remaining</Text>
          </View>
          <View style={styles.switchView}>
            <Switch />
            <Text>At the halfway point</Text>
          </View>
          <View style={styles.switchView}>
            <Switch />
            <Text>Every minute</Text>
          </View>
        </View>
        <View style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          justifyContent: 'flex-start',
          flex: 1,
          padding: 20,
        }}>
          <Button
            onPress={() => navigate('CustomizeTime')}
            title="Or Customize"
          />
        </View>
        <Button
          onPress={() => navigate('CustomizeVibrations')}
          title="Continue"
        />
      </View>
    )
  }
}

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
  italicText: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  slider: {
    width: '100%',
  },
})
