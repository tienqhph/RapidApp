import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../styleDetail';

export type parmasBody = {
  job_highlights: {
    Qualifications:[],
    Responsibilities:[] , 
    Benefits :[]
  };
};

export default function BodyDetailComponent(params: parmasBody) {


  const [btnSelected, setbtnSelected] = useState('des');

  const _onChecked = (value: string) => {
    setbtnSelected(value);
  };

  const RenderDataDeltai = ()=>{
    if(btnSelected=='des'){
       return(
      <View style={style.contentbody}>
      <Text style={style.vitriTuyendung1}>Qualifilecations:</Text>
      {params.job_highlights.Qualifications.map((data, index) => (
        <Text style={style.pd12}>{data}</Text>
      ))}
    </View>
    )
      
    }
    if(btnSelected=='company' ){
 
    if(params.job_highlights.Responsibilities!=null){
      return(
        <View style={style.contentbody}>
        <Text style={style.vitriTuyendung1}>Responsibilities:</Text>
        {params.job_highlights.Responsibilities.map((data, index) => (
          <Text style={style.pd12}>{data}</Text>
        ))}
      </View>
      )
    }else{
      return <View></View>
    }
    }
    if(btnSelected=='review'){
  if(params.job_highlights.Benefits!=null){
    return(
      <View style={style.contentbody}>
      <Text style={style.vitriTuyendung1}>Benefits:</Text>
      {params.job_highlights.Benefits.map((data, index) => (
        <Text style={style.pd12}>{data}</Text>
      ))}
    </View>
    )
  }else{
    return <View></View>
  }
    }
  
  }
  return (
    <ScrollView style={style.containerBody}>
      <View>
        {/* renderSlection */}
        <View style={style.selection}>
          <TouchableOpacity
            onPress={() => _onChecked('des')}
            style={[
              style.btnSelection,
              btnSelected == 'des' ? style.checkedSelection : null,
            ]}>
            <Text
              style={btnSelected == 'des' ? style.txtselectionchecked : null}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _onChecked('company')}
            style={[
              style.btnSelection,
              btnSelected == 'company' ? style.checkedSelection : null,
            ]}>
            <Text
              style={
                btnSelected == 'company' ? style.txtselectionchecked : null
              }>
              Company
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _onChecked('review')}
            style={[
              style.btnSelection,
              btnSelected == 'review' ? style.checkedSelection : null,
            ]}>
            <Text
              style={
                btnSelected == 'review' ? style.txtselectionchecked : null
              }>
              Reviews
            </Text>
          </TouchableOpacity>
        </View>
      </View>
            
            <RenderDataDeltai/>
    
    </ScrollView>
  );
}
