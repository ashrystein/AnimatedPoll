jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      addListener: jest.fn(),
      dispatch: jest.fn()
    }),
    useFocusEffect: jest.fn(),
    useRoute: jest.fn()
  }
})

jest.mock('react-redux', () => {
  return {
    useSelector: jest
      .fn()
      .mockImplementation(() => ({ BASE_URL: '', AUTH: '' })),
    useDispatch: jest.fn().mockImplementation()
  }
})
