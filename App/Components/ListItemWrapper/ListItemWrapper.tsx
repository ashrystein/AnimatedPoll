import React, { useEffect, useRef } from 'react'
import { ViewStyle, Image, ImageProps, Animated, Easing } from 'react-native'
import ListItemWrapperStyles from './ListItemWrapper.styles'

type ListItemWrapperProps = {
  children: React.ReactNode
  styles?: ViewStyle
  rightIcon?: ImageProps
  widthPercentage?: number
}

const ListItemWrapper = ({
  children,
  styles,
  rightIcon,
  widthPercentage
}: ListItemWrapperProps) => {
  const animatedWidthValue = useRef(new Animated.Value(0)).current

  const handleAnimation = () => {
    Animated.timing(animatedWidthValue, {
      toValue: widthPercentage,
      easing: Easing.out(Easing.exp),
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  useEffect(() => {
    widthPercentage && handleAnimation()
  }, [widthPercentage])

  return (
    <Animated.View
      style={[
        ListItemWrapperStyles.container,
        styles,
        widthPercentage
          ? {
              width: animatedWidthValue
            }
          : {}
      ]}
    >
      {rightIcon && (
        <Image source={rightIcon} style={ListItemWrapperStyles.rightIcon} />
      )}
      {children}
    </Animated.View>
  )
}

ListItemWrapper.defaultProps = {
  children: null
}

export default ListItemWrapper
