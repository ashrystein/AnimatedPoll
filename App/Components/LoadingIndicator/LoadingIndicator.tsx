import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

import { colors } from '../../Theme'
import LoadingIndicatorStyles from './LoadingIndicator.styls'

const LoadingIndicator = () => {
  return (
    <View
      style={LoadingIndicatorStyles.container}
      testID="LoadingIndicator_wrapper"
    >
      <View style={LoadingIndicatorStyles.indecator}>
        <ActivityIndicator
          size="large"
          color={colors.orca}
          testID="LoadingIndicator_icon"
        />
        <Text
          style={LoadingIndicatorStyles.loadingText}
          testID="LoadingIndicator_text"
        >
          Loading...
        </Text>
      </View>
    </View>
  )
}

export default LoadingIndicator
