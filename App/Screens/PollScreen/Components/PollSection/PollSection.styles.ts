import { StyleSheet, Dimensions } from 'react-native'

import { colors, fonts } from '../../../../Theme'
import { pollItemWidthRatio, pollPercentageWidthRatio } from './Constants'

const { width } = Dimensions.get('window')

export default StyleSheet.create<any>({
  pollItemWrapper: {
    height: 48,
    borderRadius: 99999,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24
  },
  pollItemText: (isMyAnswer: boolean) => ({
    fontSize: fonts.secondMedium,
    fontWeight: '400',
    lineHeight: 28,
    color: colors.orca,
    position: 'absolute',
    left: isMyAnswer ? 52 : 24
  }),
  pollAnswerWrapper: (isAnswer: boolean) =>
    isAnswer
      ? {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      : {},
  pollPercentageItemWrapper: (percentage: number) => ({
    backgroundColor: colors.selver(0.4)
  }),
  percentageTextWrapper: {
    flex: width * pollPercentageWidthRatio,
    marginLeft: 10
  },
  percentageText: {
    fontSize: fonts.secondMedium,
    fontWeight: '400',
    lineHeight: 28,
    color: colors.orca
  },
  percentageItemWrapper: (isAnswer: boolean) =>
    isAnswer
      ? {
          flex: width * pollItemWidthRatio,
          borderRadius: 99999
        }
      : {}
})
