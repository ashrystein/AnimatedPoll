import React from 'react'
import { render } from '@testing-library/react-native'
import {
  HeaderSection,
  BodySection
} from '../../../App/Screens/HomeScreen/Components'
import { testIDs } from '../../../App/Screens/HomeScreen/AccessibilityAndTestIDs'

describe('Home screen components', () => {
  it('should render HeaderSection successfully', () => {
    const { getByTestId, queryByText } = render(<HeaderSection />)
    expect(getByTestId(testIDs.HomeScreen_header_container)).toBeTruthy()
    expect(getByTestId(testIDs.HomeScreen_mainText_wrapper)).toBeTruthy()
    expect(queryByText('Your current goal')).not.toBeNull()
    expect(queryByText('Feel more confident')).not.toBeNull()
    expect(queryByText('1 / 7 days completed')).not.toBeNull()
  })

  it('should render BodySection successfully', () => {
    const { getByTestId, getAllByTestId, queryByText } = render(<BodySection />)
    const tipItems = getAllByTestId(testIDs.HomeScreen_tipsItem)
    expect(tipItems.length).toBe(2)
    expect(queryByText('Day 1')).not.toBeNull()

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        expect(getByTestId(testIDs.HomeScreen_dailyPoll_wrapper)).toBeTruthy()
        expect(queryByText('Mojo’s daily poll 📅  Open')).not.toBeNull()
        resolve()
      }, 2000)
    })
  })
})
