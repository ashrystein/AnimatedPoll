import React, { memo, useState, useEffect } from 'react'
import { View, FlatList, Text, Pressable, Image } from 'react-native'
import BodySectionStyles from './BodySection.styles'
import { Separator, ListItemWrapper } from '../../../../Components'
import TipsItems from './TipsItems.json'
import { useNavigation } from '@react-navigation/native'
import routes from '../../../../Navigation/Routes'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../Redux/Store'
import { accessibilityLabels, testIDs } from '../../AccessibilityAndTestIDs'
import { accessibilityAndTestProps } from '../../../../Utils/Helpers'

const BodySection = () => {
  const [showNotice, setShowNotice] = useState<boolean>(false)
  const { navigate } = useNavigation()
  const { pollData } = useSelector((state: RootState) => state.poll)

  useEffect(() => {
    pollData && setShowNotice(true)
  }, [pollData])

  const handleOnNoticePress = () => {
    navigate(routes.PollScreen)
  }

  const Notice = () => (
    <View
      style={BodySectionStyles.noticeWrapper}
      {...accessibilityAndTestProps(
        `${testIDs.HomeScreen_dailyPoll_wrapper}`,
        accessibilityLabels.daily_poll
      )}
    >
      <Pressable onPress={handleOnNoticePress}>
        <Text style={BodySectionStyles.noticeText}>
          {`Mojo’s daily poll 📅  `}
          <Text style={BodySectionStyles.noticeDecoratedText}>Open</Text>
        </Text>
      </Pressable>
      <Pressable onPress={() => setShowNotice(false)}>
        <Image
          source={require('../../../../Assets/Icons/ic_close_white.png')}
          style={{}}
        ></Image>
      </Pressable>
    </View>
  )

  const renderItem = ({ item }) => (
    <View
      {...accessibilityAndTestProps(
        `${testIDs.HomeScreen_tipsItem}`,
        item.content
      )}
    >
      <ListItemWrapper>
        <Text style={BodySectionStyles.listItemTitleText}>{item.title}</Text>
        <Separator value={2.5} dir="column" />
        <Text style={BodySectionStyles.listItemContentText}>
          {item.content}
        </Text>
      </ListItemWrapper>
      <Separator value={6} dir="column" />
    </View>
  )

  return (
    <View style={BodySectionStyles.container}>
      <Text style={BodySectionStyles.headerText}>Day 1</Text>
      <Separator value={8} dir="column" />
      <FlatList
        data={TipsItems.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={BodySectionStyles.listWrapper}
        showsVerticalScrollIndicator={false}
      />
      {showNotice && <Notice />}
    </View>
  )
}

export default memo(BodySection)
