import { Alert } from 'react-native'

const accessibilityAndTestProps = (id: string, label: string) => {
  return { testID: id, accessibilityLabel: label, accessible: true }
}

const alertMessageWithAction = (
  status: string,
  msg: string,
  action?: () => void
) => {
  Alert.alert(status, msg, [
    { text: 'Cancel' },
    { text: 'OK', onPress: action }
  ])
}

export { accessibilityAndTestProps, alertMessageWithAction }
