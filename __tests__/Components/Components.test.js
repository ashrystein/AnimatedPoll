import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import {
  Separator,
  ProgressBar,
  LoadingIndicator,
  ListItemWrapper
} from '../../App/Components'

describe('Common Components', () => {
  it('should render Separator successfully', () => {
    const { getByTestId } = render(<Separator />)
    expect(getByTestId('Separator_wrapper')).toBeTruthy()
  })

  it('should render ProgressBar successfully', () => {
    const { getByTestId } = render(<ProgressBar total={7} filled={1} />)
    expect(getByTestId('ProgressBar_total_View')).toBeTruthy()
    expect(getByTestId('Separator_filled_view')).toBeTruthy()
  })

  it('should render LoadingIndicator successfully', () => {
    const { getByTestId, queryByText } = render(
      <LoadingIndicator total={7} filled={1} />
    )
    expect(getByTestId('LoadingIndicator_wrapper')).toBeTruthy()
    expect(getByTestId('LoadingIndicator_icon')).toBeTruthy()
    expect(queryByText('Loading...')).not.toBeNull()
  })

  it('should render ListItemWrapper successfully', () => {
    const { getByTestId, queryByText } = render(
      <ListItemWrapper
        rightIcon={require('../../App/Assets/Icons/ic_avatar.png')}
      >
        <Text testID="ListItemWrapper_child">Child</Text>
      </ListItemWrapper>
    )
    expect(getByTestId('ListItemWrapper_container')).toBeTruthy()
    expect(getByTestId('ListItemWrapper_right_image')).toBeTruthy()
    expect(getByTestId('ListItemWrapper_child')).toBeTruthy()
    expect(queryByText('Child')).not.toBeNull()
  })
})
