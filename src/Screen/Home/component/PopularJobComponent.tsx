import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {style} from '../styleHome';
import {FrachPopularItem, parmastype} from '../../../api/RapidApi';
import {useNavigation} from '@react-navigation/native';
import {checkPropStackDetail} from '../../../navigation/type';
import {NAME_NAVIGATION} from '../../common/Const';

export default function PopularJobComponent() {
  const [dataPopular, setDataPopular] = useState([]);
  const navigation = useNavigation<checkPropStackDetail>();

  const parmas:parmastype={
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  }
  useEffect(() => {
   
    FrachPopularItem(parmas).then(data => {
      setDataPopular(data);
    });
  }, []);


  console.log("data        fadsfadsfdsdfds ", dataPopular[0]) ;
  const _onpressDetail = (item: any) => {
    navigation.push(NAME_NAVIGATION.Detail , item);
  };

  const renderPopular = (item: any) => (
    <TouchableOpacity
      style={style.mgl20}
      onPress={() => _onpressDetail(item)}
      key={item.company_name}>
      <View style={style.popularJobDescription}>
        <Image
          source={{uri:item.employer_logo==null?null:item.employer_logo}}
          style={style.imageAvt}
        />

        <Text style={[style.txtxam, style.txtpading]}>{item.employer_name}</Text>
        <Text numberOfLines={1}style={style.txtvitriTuyendung}>{item.job_title}</Text>
        <Text style={style.txtxam}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={style.container2}>
      <View style={style.viewPopularJobHeader}>
        <Text style={style.textpopular}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={style.txtShowAll}>Show All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataPopular}
        renderItem={({item}) => renderPopular(item)}
      />
    </View>
  );
}
