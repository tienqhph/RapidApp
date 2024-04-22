import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {style} from '../styleHome';

export default function SearchComponent() {
  const searchIcon = require('./../../../assets/icons/find.png');

  const arrayFilter = [
    {
      title: 'Full Time',
      checked: true,
    },
    {
      title: 'Part Time',
      checked: false,
    },
    {
      title: 'Freelencer',
      checked: false,
    },
  ];

  const [check , setcheck] = useState(arrayFilter)


  const _onClicckItem = (index:number)=>{
    const newarrFilter = arrayFilter.map((data , indexarr)=>{
        if(index==indexarr){
          data.checked = true
        }
        else{
          data.checked=false
        }
        return data
    
     
      
    })

    setcheck(newarrFilter)

  }
  const RenderFilter =()=> check.map((item, index) => (
      <View key={index}>
      
        <TouchableOpacity style={[style.btnfilter , item.checked? null:style.visiable]} onPress={()=>_onClicckItem(index)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    ))
  
  return (
    <View style={style.container1}>
      <View style={style.containerSearch}>
        <TextInput
          placeholder="What are you locking for"
          style={style.inputsearch}
        />
        <TouchableOpacity style={style.btnsearch}>
          <Image source={searchIcon} style={style.iconsearch} />
        </TouchableOpacity>
      </View>

      {/* filter */}
      <View style={style.ContenerFilter}>
          {RenderFilter()}
     
      </View>
    </View>
  );
}
