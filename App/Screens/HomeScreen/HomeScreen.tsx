import React, { useEffect, useState } from 'react'
import { useWindowDimensions, FlatList } from 'react-native'
import { HeaderSection, BodySection } from './Components'
import { loadPollData } from '../../Services/Apis/Apis'
import { useDispatch } from 'react-redux'
import { pollActions } from '../../Redux/Reducers/PollReducer'
import { LoadingIndicator } from '../../Components'
import { alertMessageWithAction } from '../../Utils/Helpers'

const HomeScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { width, height } = useWindowDimensions()

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
      {width > height ? (
        <>
          <FlatList
            data={[]}
            renderItem={({ item }) => item}
            ListHeaderComponent={<HeaderSection />}
            ListFooterComponent={<BodySection />}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <>
          <HeaderSection />
          <BodySection />
        </>
      )}
      {isLoading && <LoadingIndicator />}
    </>
  )
}

export default HomeScreen
