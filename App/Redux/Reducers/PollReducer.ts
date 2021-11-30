import { createSlice } from '@reduxjs/toolkit'

type pollState = {
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
    setPollData: (state, action) => ({
      ...state,
      pollData: action.payload
    }),
    setPollAnswers: (state, action) => ({
      ...state,
      pollAnswers: action.payload
    })
  }
})

export { pollActions, pollReducer, pollState }
