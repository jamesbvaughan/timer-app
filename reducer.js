const initialState = {
  pitchTime: 300,
  customVibrations: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_PITCH_TIME':
			return {
				...state,
				pitchTime: action.time,
			}
    case 'ADD_CUSTOM_VIBRATION':
      return {
        ...state,
        customVibrations: [...state.customVibrations, state.pitchTime],
      }
    case 'UPDATE_CUSTOM_VIBRATION_TIME':
      return {
        ...state,
        customVibrations: [
          ...state.customVibrations.slice(0, action.index),
          action.time,
          ...state.customVibrations.slice(action.index + 1),
        ]
      }
    default:
      return state
  }
}

