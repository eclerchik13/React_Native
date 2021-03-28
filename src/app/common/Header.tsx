import React from 'react';
import { Image, StyleSheet, View} from 'react-native';

const Header: React.FC= () => {
    return(
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor:'#5622b6',
        width:420,
        height: 80,
    },
    logo:{
        width: 80,
        height: 48,
        margin: 2
    }
});
