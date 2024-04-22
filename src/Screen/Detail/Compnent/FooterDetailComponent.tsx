import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../styleDetail';




export default function FooterDetailComponent() {
  return (
    <View style={style.containerFooter}>
      <View style={style.viewfooterbtn}>
        <TouchableOpacity style={style.viewheart}>
          <Image
            source={require('./../../../assets/icons/heart.png')}
            style={style.imgheart}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.btnapplytojob}>
          <Text style = {style.txtapply}> Apply To Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
