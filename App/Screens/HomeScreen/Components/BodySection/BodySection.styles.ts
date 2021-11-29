import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../../Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 32
  },
  headerText: {
    fontSize: fonts.xMedium,
    fontWeight: '700',
    lineHeight: 32,
    color: colors.orca
  },
  listWrapper: {
    flex: 1
  },
  listItemTitleText: {
    fontSize: fonts.small,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.orca
  },
  listItemContentText: {
    fontSize: fonts.medium,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.orca
  },
  noticeWrapper: {
    backgroundColor: colors.blue,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noticeText: {
    fontSize: fonts.small,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.white
  },
  noticeDecoratedText: {
    textDecorationLine: 'underline'
  }
})
