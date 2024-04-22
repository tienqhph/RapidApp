import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFooter: {
    backgroundColor: 'white',
    flex: 0.15,
 
    justifyContent: 'center',
    padding: 10,
  },
  containerHeader: {
     

    padding: 10,
  },
  containerBody: {
    
    flex: 5,
    padding: 12,
  },
  itemcenter: {
    alignItems: 'center',
  },
  backandshare: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  back: {
    width: 25,
    height: 25,
  },
  logoGoogle: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    marginTop: 60,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  google: {
    width: 50,
    height: 50,
  },
  vitriTuyendung: {
    fontSize: 20,
    color: 'black', textAlign:'center',
    fontWeight: 'bold',
    padding: 15,
  },
  vitriTuyendung1: {
    fontSize: 20,
    color: 'black', 
    fontWeight: 'bold',
    padding: 15,
  },
  adress: {
    display: 'flex',
    flexDirection: 'row',
  },
  txtAdress: {
    color: 'black',
    fontSize: 12,
  },
  selection: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
  btnSelection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,  marginBottom:20
  },
  checkedSelection: {
    backgroundColor: 'black',
  },
  txtselectionchecked: {
    color: 'white',
  },
  viewfooterbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgheart: {
    height: 30,
    width: 30,
  },
  viewheart: {
    borderWidth: 2,
    borderColor: '#f16b49',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  btnapplytojob: {
    backgroundColor: '#f16b49',

    flexGrow: 1,
    padding: 18,
    marginLeft: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtapply: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contentbody:{
    
     borderRadius:12 ,
    backgroundColor:'white'
  } , 
  pd12:{
    padding:12 ,
  } 
});
