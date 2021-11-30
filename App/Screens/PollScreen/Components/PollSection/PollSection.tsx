import React, { memo, useState } from 'react'
import { Pressable, Text, View, Dimensions } from 'react-native'
import { Separator, ListItemWrapper } from '../../../../Components'
import PollSectionStyles from './PollSection.styles'
import { colors } from '../../../../Theme'
import {
  alertMessageWithAction,
  accessibilityAndTestProps
} from '../../../../Utils/Helpers'
import { accessibilityLabels, testIDs } from '../../AccessibilityAndTestIDs'

const { width } = Dimensions.get('window')

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

  const handleOnPressAnswer = (answer: string) => {
    if (!answerStats) {
      handelAnswer(answer)
      setMyAnswer(answer)
    }
  }

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
            <View style={PollSectionStyles.pollAnswerWrapper(!!answerStats)}>
              <View
                style={PollSectionStyles.percentageItemWrapper(!!answerStats)}
              >
                <ListItemWrapper
                  styles={{
                    ...PollSectionStyles.pollItemWrapper,
                    ...(answerStats
                      ? PollSectionStyles.pollPercentageItemWrapper(percentage)
                      : {}),
                    ...(isMyAnswer ? { backgroundColor: colors.selver(1) } : {})
                  }}
                  rightIcon={
                    isMyAnswer &&
                    require('../../../../Assets/Icons/ic_checked.png')
                  }
                  widthPercentage={
                    answerStats ? width * 0.7 * (percentage / 100) : null
                  }
                >
                  <Text style={PollSectionStyles.pollItemText(isMyAnswer)}>
                    {text}
                  </Text>
                </ListItemWrapper>
              </View>
              {answerStats && (
                <View
                  style={PollSectionStyles.percentageTextWrapper}
                  {...accessibilityAndTestProps(
                    testIDs.PollScreen_answeredItem_percentage,
                    `${percentage}`
                  )}
                >
                  <Text style={PollSectionStyles.percentageText}>
                    {percentage} %
                  </Text>
                </View>
              )}
            </View>
            <Separator value={6} dir="column" />
          </Pressable>
        )
      })}
    </>
  )
}

export default memo(PollSection)
