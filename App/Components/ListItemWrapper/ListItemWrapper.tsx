import React from 'react'
import { View, ViewStyle, Image, ImageProps } from 'react-native'
import ListItemWrapperStyles from './ListItemWrapper.styles'

type ListItemWrapperProps = {
  children: React.ReactNode
  styles?: ViewStyle
  rightIcon?: ImageProps
}

const ListItemWrapper = ({
  children,
  styles,
  rightIcon
}: ListItemWrapperProps) => {
  return (
    <View style={[ListItemWrapperStyles.container, styles]}>
      <Image source={rightIcon} style={ListItemWrapperStyles.rightIcon} />
      {children}
    </View>
  )
}

ListItemWrapper.defaultProps = {
  children: null
}

export default ListItemWrapper
