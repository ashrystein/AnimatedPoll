import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../Theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white
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
    color: colors.orca
  },
  PollItemWrapper: {
    paddingLeft: 24,
    paddingVertical: 10,
    borderRadius: 99999,
    justifyContent: 'center'
  },
  PollItemText: {
    fontSize: fonts.secondMedium,
    fontWeight: '400',
    lineHeight: 28,
    color: colors.orca
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
  }
})
