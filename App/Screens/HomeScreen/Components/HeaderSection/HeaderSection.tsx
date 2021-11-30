import React, { memo } from 'react'
import { View, Image, Text } from 'react-native'
import HeaderSectionStyles from './HeaderSection.styles'
import { Separator, ProgressBar } from '../../../../Components'
import { accessibilityAndTestProps } from '../../../../Utils/Helpers'
import { accessibilityLabels, testIDs } from '../../AccessibilityAndTestIDs'

const HeaderSection = () => {
  return (
    <View style={HeaderSectionStyles.container}>
      <Separator dir="column" value={25} />
      <View style={HeaderSectionStyles.avatarWarapper}>
        <Image
          source={require('../../../../Assets/Icons/ic_avatar.png')}
          style={HeaderSectionStyles.avatarIcon}
        />
      </View>
      <Separator dir="column" value={2} />
      <>
        <Text style={HeaderSectionStyles.currentGoalText}>
          Your current goal
        </Text>
        <Separator dir="column" value={4} />
        <View
          style={HeaderSectionStyles.mainTextWrapper}
          {...accessibilityAndTestProps(
            testIDs.HomeScreen_mainText_wrapper,
            accessibilityLabels.feel_more_confident
          )}
        >
          <Text style={HeaderSectionStyles.mainText}>Feel more confident</Text>
          <Image
            source={require('../../../../Assets/Icons/ic_edit.png')}
            style={HeaderSectionStyles.editIcon}
          />
        </View>
        <Separator dir="column" value={12} />
        <ProgressBar total={7} filled={1} />
        <Separator dir="column" value={8} />
        <Text
          style={HeaderSectionStyles.daysCompletedText}
          {...accessibilityAndTestProps(
            testIDs.HomeScreen_daysCompleted,
            accessibilityLabels.days_completed
          )}
        >
          1 / 7 days completed
        </Text>
      </>
    </View>
  )
}

export default memo(HeaderSection)
