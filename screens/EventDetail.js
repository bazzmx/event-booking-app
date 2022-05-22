/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
 * 
 * TODO:
 * [] Build the header image background section
 *    [] Rendering the image background sub section (ImageBackground)
 *    [] Rendering the header sub section
 *    [] Rendering the footer sub section (LinearGradient)
 * [] Build the buttons group section
 * [] Build the description section
 * [] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */
import React, { useState, useEffect } from 'react';
import { Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  TouchableOpacity
 } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';

const EventDetail = ({ navigation, route }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(()=>{
    let { selectedEvent } = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.black
        }}
        style={{
          backgroundColor: COLORS.black
        }}>
          {/* Imagen de fondo */}
          <ImageBackground
            resizeMode='cover'
            source={selectedEvent?.image}
            style={{
              width: '100%',
              height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5
            }} 
          ></ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventDetail;
