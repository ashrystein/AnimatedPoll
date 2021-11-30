import React, { useCallback, useState } from 'react'
import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import { Separator, ListItemWrapper } from '../../../../Components'
import PollSectionStyles from './PollSection.styles'
import { colors } from '../../../../Theme'
import { accessibilityAndTestProps } from '../../../../Utils/Helpers'
import { testIDs } from '../../AccessibilityAndTestIDs'
import { pollItemWidthRatio } from './Constants'

type PollSectionProps = {
  answersOptions: { slug: string; text: string }[]
  answerStats: []
  handelAnswer: Function
  totalAnswers: number
}

const PollSection = ({
  answersOptions,
  answerStats,
  totalAnswers,
  handelAnswer
}: PollSectionProps) => {
  const [myAnswer, setMyAnswer] = useState<string | null>('')
  const { width } = useWindowDimensions()

  const getProperStyle = useCallback(
    (percentage: number, isMyAnswer: boolean) => ({
      ...PollSectionStyles.pollItemWrapper,
      ...(answerStats
        ? PollSectionStyles.pollPercentageItemWrapper(percentage)
        : {}),
      ...(isMyAnswer ? { backgroundColor: colors.selver(1) } : {})
    }),
    []
  )

  const handleOnPressAnswer = (answer: string) => {
    if (!answerStats) {
      handelAnswer(answer)
      setMyAnswer(answer)
    }
  }

  const AnswerPercentage = ({ percentage }: { percentage: number }) => (
    <View
      style={PollSectionStyles.percentageTextWrapper}
      {...accessibilityAndTestProps(
        testIDs.PollScreen_answeredItem_percentage,
        `${percentage}`
      )}
    >
      <Text style={PollSectionStyles.percentageText}>{percentage} %</Text>
    </View>
  )

  const RenderItemWithPercentage = ({
    isMyAnswer,
    percentage,
    text
  }: {
    isMyAnswer: boolean
    percentage: number
    text: string
  }) => (
    <View style={PollSectionStyles.pollAnswerWrapper(!!answerStats)}>
      <View style={PollSectionStyles.percentageItemWrapper(!!answerStats)}>
        <ListItemWrapper
          styles={getProperStyle(percentage, isMyAnswer)}
          rightIcon={
            isMyAnswer && require('../../../../Assets/Icons/ic_checked.png')
          }
          widthPercentage={
            answerStats ? width * pollItemWidthRatio * (percentage / 100) : null
          }
        >
          <Text style={PollSectionStyles.pollItemText(isMyAnswer)}>{text}</Text>
        </ListItemWrapper>
      </View>
      {answerStats && <AnswerPercentage percentage={percentage} />}
    </View>
  )

  return (
    <>
      {answersOptions?.map(({ slug, text }) => {
        const percentage = Math.round(
          (answerStats?.[slug] / totalAnswers) * 100
        )
        const isMyAnswer = answerStats && slug === myAnswer
        return (
          <Pressable
            key={slug}
            onPress={() => handleOnPressAnswer(slug)}
            {...accessibilityAndTestProps(
              `${testIDs.PollScreen_answerItem}${slug}`,
              text
            )}
          >
            <RenderItemWithPercentage
              isMyAnswer={isMyAnswer}
              percentage={percentage}
              text={text}
            />
            <Separator value={6} dir="column" />
          </Pressable>
        )
      })}
    </>
  )
}

export default PollSection
