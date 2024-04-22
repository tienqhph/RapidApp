import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from './styleHome';
import ToolBar from './component/ToolBar';
import SearchComponent from './component/SearchComponent';
import PopularJobComponent from './component/PopularJobComponent';
import NearByJobComponent from './component/NearByJobComponent';
import { useNavigation } from '@react-navigation/native';
import { checkPropStackDetail } from '../../navigation/type';

export default function Home() {

  return (
    <View style = {style.flex4}>
      <ToolBar />
      <SearchComponent />
      <PopularJobComponent  />
      <NearByJobComponent/>
      </View>
 
  );
}
