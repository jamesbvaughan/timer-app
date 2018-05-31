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
import { connect } from 'react-redux'

import Time from '../Time.js'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.pitchTime,
      intervalId: null,
    }

    this.decrementSeconds = this.decrementSeconds.bind(this)
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer() {
    this.setState({
      intervalId: setInterval(this.decrementSeconds, 1000)
    })
  }

  stopTimer() {
    clearInterval(this.state.intervalId)
    this.setState({
      intervalId: null,
    })
  }

  decrementSeconds() {
    this.props.customVibrations.forEach(customVibrationTime => {
      if (this.state.secondsLeft === customVibrationTime) {
        Vibration.vibrate(1000)
      }
    })
    if (this.state.secondsLeft > 0) {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1,
      })
    } else {
      Vibration.vibrate(1000)
      this.stopTimer()
    }
  }

  render() { return (
      <View style={styles.container}>
        <Text>james' text</Text>
        <Time timeInSeconds={this.state.secondsLeft} />
        <Text>james' other text</Text>
      </View>
    )
  }
}

const mapStateToProps = ({
  pitchTime,
  customVibrations,
}) => ({
  pitchTime,
  customVibrations,
})

export default connect(mapStateToProps)(Timer)

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
