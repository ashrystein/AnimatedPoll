import React, { useEffect, useState } from 'react'
import { HeaderSection, BodySection } from './Components'
import { loadPollData } from '../../Services/Apis/Apis'
import { useDispatch } from 'react-redux'
import { pollActions } from '../../Redux/Reducers/PollReducer'
import { LoadingIndicator } from '../../Components'
import { alertMessageWithAction } from '../../Utils/Helpers'

const HomeScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const dispatch = useDispatch()

  const getPollData = async () => {
    setIsloading(true)
    try {
      const data = await loadPollData()
      data && dispatch(pollActions.setPollData(data))
    } catch (error) {
      alertMessageWithAction('Faild to load the poll', 'Please try again', () =>
        getPollData()
      )
    }
    setIsloading(false)
  }

  useEffect(() => {
    getPollData()
  }, [])

  return (
    <>
      <HeaderSection />
      <BodySection />
      {isLoading && <LoadingIndicator />}
    </>
  )
}

export default HomeScreen
