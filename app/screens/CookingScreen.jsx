/* <-- dependencies --> */
import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import YouTubePlayer from 'react-native-youtube-iframe'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/details'

/* <-- constant --> */
import { COLORS, FONTS, SIZES } from 'constants'

const Video = ({ navigation, route }) => {
  const item = route.params
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={styles.header}>
          {/* <-- invoking the back button component -->  */}
          <BackButton navigation={navigation} />

          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.bold,
            }}
          >
            Video
          </Text>
          <Icon name='dots-vertical' size={25} color={COLORS.dark} />
        </View>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <YouTubePlayer height={300} play={true} videoId={item.video} />
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            bottom: 60,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.regular,
              color: COLORS.dark,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            How to Cook {item.name}
          </Text>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text
              style={{
                fontSize: SIZES.name,
                fontFamily: FONTS.regular,
                color: COLORS.dark,
                textAlign: 'justify',
                letterSpacing: 0.8,
              }}
            >
              {item.instructions}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}
export default Video
