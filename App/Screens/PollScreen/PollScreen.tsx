import React from 'react'
import { Pressable, View, Image, Text, FlatList } from 'react-native'
import PollScreenStyles from './PollScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { Separator, ListItemWrapper } from '../../Components'

function PollScreen() {
  const { goBack } = useNavigation()
  const pollChoices = [
    'Always',
    'Most of the time',
    'About half of the time',
    'Rarely',
    'Never'
  ]

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

  const PollSection = () => (
    <>
      {pollChoices.map((item) => (
        <Pressable key={item}>
          <ListItemWrapper styles={PollScreenStyles.PollItemWrapper}>
            <Text style={PollScreenStyles.PollItemText}>{item}</Text>
          </ListItemWrapper>
          <Separator value={6} dir="column" />
        </Pressable>
      ))}
    </>
  )

  const ResoposeSection = () => (
    <View style={PollScreenStyles.responsesWrapper}>
      <Text style={PollScreenStyles.responsesText}>1,234 responses</Text>
      <Separator value={19} dir="column" />
      <Text
        style={[PollScreenStyles.responsesText, PollScreenStyles.noAnswerText]}
      >
        I don’t want to answer
      </Text>
    </View>
  )

  return (
    <View style={PollScreenStyles.container}>
      <HeaderSection />
      <Separator value={16} dir="column" />
      <PollSection />
      <Separator value={10} dir="column" />
      <ResoposeSection />
    </View>
  )
}

export default PollScreen
