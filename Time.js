import React from 'react'
import { Text } from 'react-native'

import { formatTime } from './util.js'

const Time = ({ timeInSeconds }) =>
  <Text style={{ fontSize: 64, textAlign: 'center' }}>
    {formatTime(timeInSeconds)}
  </Text>

export default Time
