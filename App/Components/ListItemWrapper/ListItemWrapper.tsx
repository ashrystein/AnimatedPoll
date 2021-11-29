import React from 'react'
import { View, ViewStyle } from 'react-native'
import ListItemWrapperStyles from './ListItemWrapper.styles'
import { Separator } from '..'

type ListItemWrapperProps = {
  children: React.ReactNode
  styles?: ViewStyle
}

const ListItemWrapper = ({ children, styles }: ListItemWrapperProps) => (
  <View style={[ListItemWrapperStyles.container, styles]}>{children}</View>
)

ListItemWrapper.defaultProps = {
  children: null
}

export default ListItemWrapper
