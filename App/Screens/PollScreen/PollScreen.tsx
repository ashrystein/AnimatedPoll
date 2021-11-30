import React, { useState } from 'react'
import { Pressable, View, Image, Text } from 'react-native'
import PollScreenStyles from './PollScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { Separator, LoadingIndicator } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/Store'
import { answerAndGetPollPercentages } from '../../Services/Apis/Apis'
import { pollActions } from '../../Redux/Reducers/PollReducer'
import { PollSection } from './Components'
import { alertMessageWithAction } from '../../Utils/Helpers'

const PollScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [answersData, setAnswersData] = useState(null)
  const { goBack } = useNavigation()
  const { pollData } = useSelector((state: RootState) => state.poll)
  const dispatch = useDispatch()

  const handelAnswer = async (answer: string | null) => {
    setIsloading(true)
    try {
      const data = await answerAndGetPollPercentages(answer)
      if (data) {
        setAnswersData(data)
        dispatch(pollActions.setPollAnswers(data))
      }
    } catch (error) {
      alertMessageWithAction(
        'Faild to answer the poll',
        'Please try again',
        () => handelAnswer(answer)
      )
    }
    setIsloading(false)
  }

  const handleOnClose = () => {
    goBack()
  }

  const HeaderSection = () => (
    <>
      <Pressable
        style={PollScreenStyles.closeIconWrapper}
        onPress={handleOnClose}
      >
        <Image
          source={require('../../Assets/Icons/ic_close_black.png')}
          style={PollScreenStyles.closeIcon}
        />
      </Pressable>
      <Separator dir="column" value={16} />
      <Text style={PollScreenStyles.pollQuestionText}>
        How often do you watch porn while masturbating?
      </Text>
    </>
  )

  const ResoposeSection = () => (
    <View style={PollScreenStyles.responsesWrapper}>
      <Text style={PollScreenStyles.responsesText}>
        {`${(
          answersData || pollData
        )?.response_count?.toLocaleString()} responses`}
      </Text>
      <Separator value={19} dir="column" />
      {!answersData && (
        <Text
          style={[
            PollScreenStyles.responsesText,
            PollScreenStyles.noAnswerText
          ]}
          onPress={() => handelAnswer(null)}
        >
          I don’t want to answer
        </Text>
      )}
    </View>
  )

  return (
    <View style={PollScreenStyles.container}>
      <HeaderSection />
      <Separator value={16} dir="column" />
      <PollSection
        answersOptions={pollData?.answers_options}
        answerStats={answersData?.answer_stats}
        handelAnswer={handelAnswer}
        totalAnswers={answersData?.response_count}
      />
      <Separator value={10} dir="column" />
      <ResoposeSection />
      {isLoading && <LoadingIndicator />}
    </View>
  )
}

export default PollScreen
