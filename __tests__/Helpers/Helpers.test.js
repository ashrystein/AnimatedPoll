import { accessibilityAndTestProps } from '../../App/Utils/Helpers'

describe('Should return expected value', () => {
  test('should ', async () => {
    const obj = accessibilityAndTestProps('id', 'label')
    expect(obj).toEqual({
      testID: 'id',
      accessibilityLabel: 'label',
      accessible: true
    })
  })
})
