import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pollState {
  pollData: any
  pollAnswers: any
}

const { actions: pollActions, reducer: pollReducer } = createSlice({
  name: 'poll',
  initialState: <pollState>{
    pollData: null,
    pollAnswers: []
  },
  reducers: {
    setPollData: (state, action: PayloadAction<any>) => ({
      ...state,
      pollData: action.payload
    }),
    setPollAnswers: (state, action: PayloadAction<any>) => ({
      ...state,
      pollAnswers: action.payload
    })
  }
})

export { pollActions, pollReducer, pollState }
