import React from 'react';
import { Text,View } from 'react-native';

function Title(props) {
    return (
        <View style = {[{flexDirection:'row'},props.style]}>
            <Text style = {{fontFamily:'Poppins-Normal', fontSize:props.fontSize, color:'white'}}>
                One
            </Text>
            <Text style={{fontFamily:'Poppins-Bold', fontSize: props.fontSize ,color:'#FB724C'}}>
                Stop
            </Text>
        </View>
    );
}

export default Title;