import React from 'react';
import {View} from 'react-native';


const Card=(props)=>{
  return(
      <View style={styles.containerStyle}>{props.children}</View>
  );
};

const styles={
    containerStyle:{
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:2,
        shadowColor:'#000',
        borderBottomWidth:0,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        elevation:1,
        marginBottom:10,
    }
}
export default Card;
