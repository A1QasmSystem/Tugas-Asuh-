

import React from 'react';
import {View,Text,Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const App = () => {
  return (
    <View style= {{backgroundColor: "white"}}>
      <View style= {{height: 50 , width :'100%' , backgroundColor : "#00ffff" , flexDirection : 'row',alignItems: 'center'}} >
          <TouchableOpacity onPress={()=> {alert('Kakak Asuh Indonesia')}}>
            <Image 
        
              style= {styles.image}
              source= {require('./src/assets/Menu.png')}
            />
          </TouchableOpacity>  
        <Text style= {{fontSize: 25, marginLeft: 15, fontWeight:"bold", color: 'black'}}>Kakak Asuh Indonesia</Text>
    
      </View>
      <ScrollView horizontal= {true} >
        <TouchableOpacity onPress= {()=> {alert('Pilih Adik Asuh!')}}>
          <View 
            
            style= {{backgroundColor: '#00ffff', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
          <Image 
            style= {styles.family}
            source= {require('./src/asset/parent.png')} 
            />
            <Text style={{marginTop:10 , marginLeft:20 , fontSize: 15}}>Pilih Adik Asuh</Text>
          
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress= {()=> {alert('Santri Mandiri 83 orang')}}>
          <View style= {{backgroundColor: '#00ffff', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            
            <Text style= {{fontWeight: 'bold', fontSize: 60, marginLeft : 35, marginTop: 10}}>83</Text>
            <Text style= {{marginTop:10 , marginLeft:20 , fontSize: 15}}>Santri Mandiri</Text>
          
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress= {()=> {alert('Santri Belum Mandiri 71 orang')}}>  
          <View style= {{backgroundColor: '#00ffff', width: 125, height:125 , marginLeft: 10 , marginTop: 10, marginRight: 10}}>

            <Text style= {{fontWeight: 'bold', fontSize: 60, marginLeft : 35, marginTop: 10}}>71</Text>
            <Text style= {{marginTop:5 , marginLeft:25 , fontSize: 15}}>Santri Belum </Text>
            <Text style= {{marginTop: 0 , marginLeft:40 , fontSize: 15}}>Mandiri</Text>   

          </View>
          </TouchableOpacity>    
      </ScrollView>
       <Text style={{fontSize: 30, fontWeight:'bold', marginTop: 30, marginLeft: 10}}>Adik Asuh Saya :</Text>
       
    
       <View style= {{flexDirection:'row', backgroundColor: '#94EDEE'}}>
        <TouchableOpacity onPress= {()=> alert('Mizan')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image 
              style= {styles.nama1}
              source= {require('./src/asset/avatar.png')}
            />
            <Text style= {{marginLeft: 15, marginTop: 10}}>Nama Adik Asuh</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('BNI')}>  
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
          <Image 
            style= {styles.transfer1}
            source= {require('./src/asset/transfer.png')}
          />
          <Text style= {{marginLeft: 20, marginTop: 15}}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('Telah Membayar')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image
              style= {styles.konfirmasi1}
              source= {require('./src/asset/konfirmasi.jpg')}
            />
            <Text style= {{marginLeft: 3, marginTop: 15}}>Konfirmasi</Text>  
          </View>
        </TouchableOpacity>     
           
          
      </View>
      <View style= {{flexDirection:'row', backgroundColor: '#94EDEE', marginTop: 10}}>
        <TouchableOpacity onPress= {()=> alert('Rahmad')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image 
              style= {styles.nama1}
              source= {require('./src/asset/avatar.png')}
            />
            <Text style= {{marginLeft: 15, marginTop: 10}}>Nama Adik Asuh</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('BNI')}>  
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
          <Image 
            style= {styles.transfer1}
            source= {require('./src/asset/transfer.png')}
          />
          <Text style= {{marginLeft: 20, marginTop: 15}}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('Telah Membayar')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image
              style= {styles.konfirmasi1}
              source= {require('./src/asset/konfirmasi.jpg')}
            />
            <Text style= {{marginLeft: 3, marginTop: 15}}>Konfirmasi</Text>  
          </View>
        </TouchableOpacity>     
           
          
      </View>
      <View style= {{flexDirection:'row', backgroundColor: '#94EDEE', marginTop: 10}}>
        <TouchableOpacity onPress= {()=> alert('Sumayyah')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image 
              style= {styles.nama1}
              source= {require('./src/asset/avatar.png')}
            />
            <Text style= {{marginLeft: 15, marginTop: 10}}>faiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('BNI')}>  
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
          <Image 
            style= {styles.transfer1}
            source= {require('./src/asset/transfer.png')}
          />
          <Text style= {{marginLeft: 20, marginTop: 15}}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> alert('Telah Membayar')}>
          <View style= {{backgroundColor: '#94EDEE', width: 125, height:125 , marginLeft: 10 , marginTop: 10}}>
            <Image
              style= {styles.konfirmasi1}
              source= {require('./src/asset/konfirmasi.jpg')}
            />
            <Text style= {{marginLeft: 3, marginTop: 15}}>Konfirmasi</Text>  
          </View>
        </TouchableOpacity>     
           
          
      </View>
      
      
       
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  image : {
    width: 20,
    height:20,
    marginLeft: 20,
    
    
  },
  family: {
    width :'70%',
    height: '70%',
    marginLeft: 21,
    marginTop : 5
    
    
  },
  nama1: {
    width: '50%',
    height: '50%',
    marginLeft: 30,
    marginTop: 10
  },
  transfer1: {
    width: '50%',
    height: '50%',
    marginLeft: 15,
    marginTop: 10
  },
  konfirmasi1: {
    width: '50%',
    height: '50%',
    marginLeft: 0,
    marginTop: 10
  }

})