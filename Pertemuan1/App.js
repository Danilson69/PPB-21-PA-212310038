import React, { useState, useEffect} from "react";
import {View, Text, StatusBar, Image } from 'react-native';

export default function App () {
  return (
  <View style={{flex: 1}}>
    <StatusBar barStyle={'light-content'} backgroundColor='##212121'> </StatusBar>
    <View style={{alignItems: 'center', backgroundColor: '#black'}}>
      <Image source={{uri: 'https://avatarfiles.alphacoders.com/167/167619.gif'}}
     style={{width: 100, height: 100, borderRadius: 100 / 2, marginTop:50}} />
     <Text style={{marginTop: 15, fontSize: 22, fontWeight: 'bold', padding: 10, color: 'black'}}>Nama :</Text>
      <Text style={{marginTop: 15, fontSize: 22, fontWeight: 'bold', padding: 10, color: 'black'}}>Danilson Daka T</Text>
  
      <View style={{flex:1, flexDirection: "row", justifyContent:'space-around', alignItems:'center'}}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/800px-Steam_icon_logo.svg.png' }}  style={{
        width:40, height: 40, marginRight:10,
      }} />

        <Image source={{uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}} style={{
          width:40, height:40,}} />

     </View>

     </View>
    </View>
  );
};