import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import LoadingIndicatorStyles from './LoadingIndicator.styls'
import { colors } from '../../Theme'

const LoadingIndicator = () => {
  return (
    <View style={LoadingIndicatorStyles.container}>
      <View style={LoadingIndicatorStyles.indecator}>
        <ActivityIndicator size="large" color={colors.orca} />
        <Text style={LoadingIndicatorStyles.loadingText}>Loading...</Text>
      </View>
    </View>
  )
}

export default LoadingIndicator
