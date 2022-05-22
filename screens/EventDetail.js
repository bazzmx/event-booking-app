/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
              height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
            }} 
          >
            <View style={{flex: 1}}>
              {/* Encabezado de la imagen */}
              <SectionImageHeader>
                <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 56,
                  height: 40,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10
                }}>
                  <McIcon source={icons.back_arrow} size={24}/>
                </TouchableOpacity>
                <View
                  style={{
                    width: 96,
                    height: 40,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 10,
                    flexDirection: 'row'
                }}>
                <TouchableOpacity>
                  <McIcon source={icons.like}
                    size={24}
                    style={{
                      marginLeft: 16,
                      tinycolor: COLORS.white,
                    }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                  <McIcon source={icons.share}
                    size={24}
                    style={{
                      marginRight: 16,
                      tinycolor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
                </View>
              </SectionImageHeader>
              {/* Pie de página de la imagen */}
              <SectionImageFooter>
                <LinearGradient
                  colors = {['transparent', '#000']}
                  start = {{x: 0, y: 0}}
                  end = {{x: 0, y: 1}}
                  style = {{
                    width: '100%',
                    height: 400,
                    justifyContent: 'flex-end'
                  }}
                  >
                  <FooterContentView>
                    <View>
                      <McText body4 style={{ opacity: 0.5, letterSpacing: 2 }}>{selectedEvent?.type}</McText>
                      <McText h1>{selectedEvent?.title}</McText>
                      <McText body4 style={{ opacity: 0.5, letterSpacing: 1.5 }}>
                        COMIENZA {moment(selectedEvent?.startingTime).format('hh:mm A')}</McText>
                    </View>
                    <LinearGradient
                      colors = {COLORS.linear}
                      start = {{ x: 0, y: 1 }}
                      end = {{ x: 1, y: 1 }}
                      style = {{
                        width: 60,
                        height: 60,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <McText body4 style={{ letterSpacing: 1 }}>
                        {moment(selectedEvent?.startingTime).format('MMM').toUpperCase()}
                      </McText>
                      <McText h2 style={{}}>
                        {moment(selectedEvent?.startingTime).format('DD')}
                      </McText>
                    </LinearGradient>
                  </FooterContentView>
                </LinearGradient>
              </SectionImageFooter>
            </View>
          </ImageBackground>
          {/* Agrupación de botones */}
          <ButtonSection>
            <TouchableOpacity
              style={{
                width: 100,
                height: 32,
                borderRadius: 10,
                marginRight: 16,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <McText h6 style={{color: COLORS.black, letterSpacing: 1}}>ACERCA DE</McText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 124,
                height: 32,
                borderRadius: 10,
                backgroundColor: COLORS.input,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <McText h6 style={{opacity:0.5, letterSpacing: 1}}>PARTICIPANTES</McText>
            </TouchableOpacity>
          </ButtonSection>
          {/* Descripción del event */}
          <DescriptionSection>
            <McText body3>{selectedEvent?.description}</McText>
          </DescriptionSection>
          {/* Ubicación del evento */}
          <LocationSection>
            <McText h3>UBICACIÓN</McText>
            <View
              style={{
                height: 250
              }}
            >
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                  height: 250,
                  borderRadius: 30,
                  marginTop: 20
                }}
                minZoonLevel={15}
                initialRegion={dummyData.Region}
                customMapStyle={dummyData.MapStyle}
              >
              </MapView>
            </View>
            <View style={{paddingBottom: 150}}></View>
          </LocationSection>
      </ScrollView>
      {/* Barra inferior */}
      <BottomBarSection>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 30
        }}>
          <View>
            <McText body3 style={{ opacity: 0.5, letterSpacing: 1 }}>PRECIO</McText>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}>
              <McText h2>€25,00</McText>
              <McText h3>/entrada</McText>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors = {COLORS.linear}
              start = {{ x: 0, y: 1 }}
              end = {{ x: 1, y: 1 }}
              style = {{
                width: 143,
                height: 53,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15
              }}
            >
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <McText h4>COMPRAR</McText>
                <McIcon source={icons.buy_ticket} size={24} style={{marginLeft: 11}}></McIcon>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </BottomBarSection>
    </View>
  );
};

const BottomBarSection = styled.View`
  height: 130px;
  width: ${SIZES.width+'px'};
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.tabBar}
  position: absolute;
  bottom: 0px;
  justify-content: center;
`;

const SectionImageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios'?'40px':'25px'};
  margin-left: 30px;
  margin-right: 30px;
`;

const SectionImageFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  position: relative;
  z-index: -1;
`;

const FooterContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px;
`;

const ButtonSection = styled.View`
  margin: 15px 30px;
  flex-direction: row;
`;

const DescriptionSection = styled.View`
  margin: 0px 30px;
`;

const LocationSection = styled.View`
   margin: 25px 30px;
`;


const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventDetail;
