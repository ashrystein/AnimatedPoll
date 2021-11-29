import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../../Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.orca,
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  avatarWarapper: {
    paddingVertical: 19,
    paddingRight: 10,
    alignItems: 'flex-end'
  },
  avatarIcon: {
    width: 20,
    height: 20
  },
  currentGoalText: {
    fontSize: fonts.medium,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.white
  },
  mainTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainText: {
    fontSize: fonts.large,
    fontWeight: '700',
    lineHeight: 36,
    color: colors.white
  },
  editIcon: {
    width: 17,
    height: 17,
    marginLeft: 16
  },
  daysCompletedText: {
    fontSize: fonts.small,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.white
  }
})
