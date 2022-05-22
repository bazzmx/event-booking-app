/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [] Build the FEATURED section (Flatlist)
 * [] Build the FOR YOU section 
 */
import React from 'react';
import { Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  ImageBackground
  } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';

const Featured = ({ navigation }) => {

  const _renderItem = ({item, index}) => {
    return (
      <View style={{
        marginLeft: index === 0 ? 30: 20,
        marginRight: index === dummyData.Events.length -1? 30: 0
      }}>
        <ImageBackground source={item.image}
        resizeMode = 'cover'
        borderRadius = {SIZES.radius}
        style = {{
          width: SIZES.width / 2 + 70,
          height: SIZES.width / 2 + 70,
          justifyContent: 'space-between'
        }}
        >
          <View style={{
            alignItems: 'flex-end',
            marginHorizontal: 15,
            marginVertical: 15,

          }}>
          <DateBox>
            <McText body5 color={COLORS.black} style={{ opacity: 0.5,
              letterSpacing: 2
             }}>
              {moment(item.startingtime).format('MMM').toUpperCase()}
            </McText>
            <McText h2 color={COLORS.black}>
              {moment(item.startingtime).format('DD')}
            </McText>
          </DateBox>
          </View>
          <View style={{
            marginLeft: 20,
            marginBottom: 25
          }}>
            <McText body5 style={{opacity: 0.5}}>{item.type}</McText>
            <McText h2>{item.title}</McText>
          </View>

        </ImageBackground>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeader>
        {/* Sección de encabezado */}
        <View>
          <McText body5 style={{opacity: 0.5}}>23 de Mayo, 21:00</McText>
          <McText h1>Explorar eventos</McText>
        </View>
        <McAvatar source={images.avatar}/>
      </SectionHeader>
      {/* Sección de búsqueda */}
      <SectionSearch>
        <SearchView>
          <McIcon source={icons.search} size={24} />
          <TextInput
            placeholder="Buscar"
            placeholderTextColor={COLORS.gray1}
            syle={{
              ...FONTS.h4,
              color: COLORS.white,
              width: 250
            }}>
          </TextInput>
          <McIcon source={icons.filter} size={24}/>
        </SearchView>
      </SectionSearch>
      {/* Destacado */}
      <SectionTitle>
        <McText h5>DESTACADO</McText>
        <View>
          <FlatList
          horizontal
          contentContainerStyle={{}}
          keyExtractor={(item) => 'event_' + item.id}
          data={dummyData.Events}
          renderItem={_renderItem}
          ></FlatList>
        </View>
      </SectionTitle>
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
  padding: 25px ${SIZES.padding};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SectionSearch = styled.View`
  margin: 4px ${SIZES.padding};
  height: 50px;
  background-color: ${COLORS.input};
  border-radius: 15px;
  justify-content: center;
  margin-left: 9px;
  margin-right: 15px;
`;

const SearchView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 9px;
  margin-right: 15px;
`;

const SectionTitle = styled.View`
  margin: 20px;
`;

const DateBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 15;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
