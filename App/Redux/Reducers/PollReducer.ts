import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pollState {
  pollData: any
  pollPercentages: any
}

const { actions: pollActions, reducer: pollReducer } = createSlice({
  name: 'poll',
  initialState: <pollState>{
    pollData: null,
    pollPercentages: []
  },
  reducers: {
    setPollData: (state, action: PayloadAction<any>) => ({
      ...state,
      pollData: action.payload
    })
  }
})

export { pollActions, pollReducer, pollState }
