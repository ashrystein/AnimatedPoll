import React, { useMemo, memo } from 'react'
import { View } from 'react-native'
import progressBarStyles from './ProgressBar.styles'

type ProgressBarProps = {
  total: number
  filled: number
}

const ProgressBar = ({ total, filled }: ProgressBarProps) => {
  const filledPercentage = useMemo(() => filled / total, [total, filled])
  return (
    <View
      style={[progressBarStyles.barStyle, progressBarStyles.totalView]}
      testID="ProgressBar_total_View"
    >
      <View
        style={[
          progressBarStyles.barStyle,
          progressBarStyles.fillView(filledPercentage)
        ]}
        testID="Separator_filled_view"
      />
    </View>
  )
}

ProgressBar.defaultProps = {
  total: 0,
  filled: 0
}

export default memo(ProgressBar)
