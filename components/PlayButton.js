import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import IconPlay from '../assets/icons/DE-play-button.png';

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  pauseButton: {
    opacity: 1
  },
  playButton: {
    width: 80,
    height: 80,
    opacity: 0.9
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <Icons
        style={!props.paused ? styles.pauseButton : {display: 'none'}}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
        color={props.theme}
        size={75}
      />
        {(props.paused) && (
          <Image
            style={styles.playButton}
            source={IconPlay}
          />
        )}

    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }
