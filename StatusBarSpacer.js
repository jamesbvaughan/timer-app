import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

export default StatusBarSpacer = () =>
  <View style={styles.statusBar}></View>

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
  },
})
