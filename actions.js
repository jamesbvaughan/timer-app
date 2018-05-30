export const updatePitchTime = time => ({ type: 'UPDATE_PITCH_TIME', time })

export const addCustomVibration = () => ({ type: 'ADD_CUSTOM_VIBRATION' })

export const updateCustomVibrationTime = (index, time) => ({
  type: 'UPDATE_CUSTOM_VIBRATION_TIME',
  index,
  time,
})
