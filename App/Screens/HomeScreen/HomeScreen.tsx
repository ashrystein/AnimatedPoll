import React, { useEffect } from 'react'
import { HeaderSection, BodySection } from './Components'
import { loadPollData } from '../../Services/Apis/Apis'
import { useFetch } from '../../Hooks'
import { useDispatch } from 'react-redux'
import { pollActions } from '../../Redux/Reducers/PollReducer'
import { LoadingIndicator } from '../../Components'

const HomeScreen = () => {
  const [isLoading, isError, data] = useFetch(loadPollData)
  const dispatch = useDispatch()

  useEffect(() => {
    data && dispatch(pollActions.setPollData(data))
  }, [data])

  return (
    <>
      <HeaderSection />
      <BodySection />
      {isLoading && <LoadingIndicator />}
    </>
  )
}

export default HomeScreen
