import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../Theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    paddingBottom: 25
  },
  closeIconWrapper: {
    marginVertical: 14.5,
    marginLeft: 7.5
  },
  closeIcon: {
    width: 15,
    height: 15
  },
  pollQuestionText: {
    fontSize: fonts.large,
    fontWeight: '700',
    lineHeight: 36,
    color: colors.orca,
    marginRight: 10
  },
  pollItemWrapper: {
    height: 48,
    borderRadius: 99999,
    justifyContent: 'center'
  },
  pollItemText: {
    fontSize: fonts.secondMedium,
    fontWeight: '400',
    lineHeight: 28,
    color: colors.orca,
    position: 'absolute',
    left: 24
  },
  responsesWrapper: {
    alignItems: 'center'
  },
  responsesText: {
    fontSize: fonts.medium,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.orca
  },
  noAnswerText: {
    textDecorationLine: 'underline'
  },
  pollPercentageItemWrapper: {
    width: 30
  }
})
