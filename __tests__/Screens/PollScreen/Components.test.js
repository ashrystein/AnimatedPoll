import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { PollSection } from '../../../App/Screens/PollScreen/Components'
import { testIDs } from '../../../App/Screens/PollScreen/AccessibilityAndTestIDs'

const props = {
  answersOptions: [
    { slug: 'always', text: 'Always' },
    { slug: 'most', text: 'Most of the time' }
  ],
  totalAnswers: 123
}

describe('Poll screen components', () => {
  const handelAnswer = jest.fn()
  it('should render PollSection befor answer successfully', () => {
    const { getByTestId, queryByText } = render(
      <PollSection {...props} handelAnswer={handelAnswer} />
    )
    expect(getByTestId(`${testIDs.PollScreen_answerItem}always`)).toBeTruthy()
    expect(getByTestId(`${testIDs.PollScreen_answerItem}most`)).toBeTruthy()
    expect(queryByText('Always')).not.toBeNull()
    expect(queryByText('Most of the time')).not.toBeNull()
    fireEvent.press(getByTestId(`${testIDs.PollScreen_answerItem}always`))
    expect(handelAnswer).toBeCalled()
  })

  it('should render PollSection answers percentages successfully', () => {
    const { getByTestId, getAllByTestId } = render(
      <PollSection
        {...props}
        handelAnswer={handelAnswer}
        answerStats={{ always: 4129, most: 2994 }}
      />
    )

    const answersPercentages = getAllByTestId(
      testIDs.PollScreen_answeredItem_percentage
    )
    expect(answersPercentages.length).toBe(2)
    fireEvent.press(getByTestId(`${testIDs.PollScreen_answerItem}always`))
    expect(handelAnswer).not.toBeCalled()
  })
})
