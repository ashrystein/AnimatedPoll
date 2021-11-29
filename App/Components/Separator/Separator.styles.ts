import { StyleSheet } from 'react-native'

const styles = StyleSheet.create<any>({
  separator: (dir, value) => ({
    marginHorizontal: dir === 'row' ? value : 0,
    marginVertical: dir === 'column' ? value : 0
  })
})

export default styles
