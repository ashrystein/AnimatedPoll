import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../Theme'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indecator: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 20,
    backgroundColor: colors.selver(0.8),
    borderRadius: 5
  },
  loadingText: {
    color: colors.orca,
    fontSize: fonts.small,
    fontWeight: '500',
    marginTop: 10
  }
})

export default styles
