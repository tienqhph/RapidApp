import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { NAME_NAVIGATION } from '../Screen/common/Const'
import { RouteProp } from '@react-navigation/native'


export type RootParams ={
    Home :undefined,
    Detail: {
        employer_logo:string , 
        employer_name:string,
        job_title:string , 
        job_country:string,
        job_highlights:{
            Qualifications:[] , 
            Responsibilities :[] , 
            Benefits:[]
        }
    } 
}

//type cheking

export type checkPropStackDetail = NativeStackNavigationProp<RootParams ,NAME_NAVIGATION.Detail>


//type check get params root
export type checkPropParamDetail = RouteProp<RootParams , NAME_NAVIGATION.Detail>


