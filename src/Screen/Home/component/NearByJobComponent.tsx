import { View, Text  , TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../styleHome'
import { FlatList } from 'react-native-gesture-handler'
import { FrachPopularItem } from '../../../api/RapidApi'
import { useNavigation } from '@react-navigation/native'
import { checkPropStackDetail } from '../../../navigation/type'

export default function NearByJobComponent() {
  const  [dataPopular  ,setDataPopular] = useState([])
  const navigation= useNavigation<checkPropStackDetail>()
  useEffect(()=>{
    
    // FrachPopularItem().then(data => {
    //   setDataPopular(data)
    // })
  } , [])

    const renderNearbyJobs = ({ item }: { item: any }) => (
      <View style={style.mr20} key={item.location}>
        <View style={style.itemNearByJob}>
          <Image source={{uri:item.employer_logo}} style={style.imageAvt} />
          <View style={style.pdl10}>
            <Text style={style.txtlanguage}>{item.employer_name}</Text>
            <Text style={style.txtxam}>{item.job_country}</Text>
          </View>
        </View>
      </View>
    );
  return (
    
    <View style = {style.container3}>
    <View style={style.viewPopularJobHeader}>
      <Text style={style.textpopular}>Nearby Jobs</Text>
      <TouchableOpacity>
        <Text style={style.txtShowAll}>Show All</Text>
      </TouchableOpacity>
    </View>


    <FlatList
   
        data={dataPopular}
        renderItem={renderNearbyJobs}
        keyExtractor={item => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
   </View>
   
  )
}