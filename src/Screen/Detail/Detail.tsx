import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from './Compnent/HeaderComponent';
import {style} from './styleDetail';
import BodyDetailComponent from './Compnent/BodyDetailComponent';
import FooterDetailComponent from './Compnent/FooterDetailComponent';
import {useRoute} from '@react-navigation/native';
import {checkPropParamDetail} from '../../navigation/type';

export default function Detail() {
  const parmas = useRoute<checkPropParamDetail>().params;


  return (
    <View style={style.container}>
      <HeaderComponent
        logo={parmas.employer_logo}
        employer_name={parmas.employer_name}
        jobtitle={parmas.job_title}
        location={parmas.job_country}
      />
      <BodyDetailComponent  job_highlights={parmas.job_highlights}/>
      <FooterDetailComponent />
    </View>
  );
}
