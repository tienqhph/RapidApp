import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../styleDetail';
import { useNavigation } from '@react-navigation/native';
import { checkPropStackDetail } from '../../../navigation/type';
import { NAME_NAVIGATION } from '../../common/Const';


export type headerParam = {
  logo:string , 
  jobtitle:string , 
  employer_name:string , 
  location:string

}
export default function HeaderComponent(parmas:headerParam) {
  const navigation = useNavigation<checkPropStackDetail>()
  const _onBack =()=>{
      navigation.pop()
  }
  return (
    <View style={style.containerHeader}>
      <View style={style.backandshare}>
        <TouchableOpacity onPress={_onBack}>
          <Image source={require('./../../../assets/icons/back.png')}  style = {style.back}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./../../../assets/icons/share.png')} style = {style.back} />
        </TouchableOpacity>
      </View>
      <View style = {style.itemcenter}>
      <View style = {style.logoGoogle}>
        <Image source={{uri:  parmas.logo}} style = {style.google} />
      </View>
      <Text style = {style.vitriTuyendung}>{parmas.jobtitle}</Text>
      <View style = {style.adress}>
        <Text style = {style.txtAdress}>{parmas.employer_name}/</Text>
        <Image source={require('./../../../assets/icons/loaction.png')} />
        <Text>{parmas.location}</Text>
      </View>
      </View>
  
    </View>
  );
}
