import { pollActions } from '../../App/Redux/Reducers/PollReducer'
import store from '../../App/Redux/Store'

describe('unit testing for poll reducer', () => {
  it('should store poll data', () => {
    store.dispatch(pollActions.setPollData({ data: [] }))
    const { pollData } = store.getState().poll
    expect(pollData).toEqual({ data: [] })
  })

  it('should store poll answers', () => {
    store.dispatch(pollActions.setPollAnswers({ answers: [] }))
    const { pollAnswers } = store.getState().poll
    expect(pollAnswers).toEqual({ answers: [] })
  })
})
