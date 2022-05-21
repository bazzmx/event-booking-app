/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [] Build the FEATURED section (Flatlist)
 * [] Build the FOR YOU section 
 */
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';

const Featured = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
