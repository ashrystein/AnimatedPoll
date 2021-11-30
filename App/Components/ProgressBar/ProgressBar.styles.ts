import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Theme'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create<any>({
  barStyle: {
    height: 6,
    borderRadius: 8
  },
  totalView: {
    backgroundColor: colors.selver(0.2),
    width: width * 0.6
  },
  fillView: (filledPercentage: number) => ({
    backgroundColor: colors.dolphin,
    width: width * 0.6 * filledPercentage
  })
})

export default styles
