import React from 'react'
import { View } from 'react-native'

import SeparatorStyles from './Separator.styles'

type SeparatorProps = {
  dir?: string
  value: number
}

const Separator = ({ dir, value }: SeparatorProps) => (
  <View
    style={SeparatorStyles.separator(dir, value)}
    testID="Separator_wrapper"
  />
)

Separator.defaultProps = {
  dir: 'column',
  value: 0
}

export default Separator
