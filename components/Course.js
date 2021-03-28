import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Linking} from 'react-native';

import CustomButton from '../components/CustomButton';

const Course = props =>{
    

    return (
        <View style = {styles.container} onPress = {props.onTouch}>
           
                <View style = {styles.textContainer}>
                    
                        <Text style = {styles.label}>Channel name: {props.name}</Text>
                        <Text style = {styles.label}>Description: {props.desc}</Text>
                        <CustomButton title = {'Open Website'} onTouch = {() =>{
                           
                            Linking.openURL(props.link);
                            
                        }}/>
                    
                </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    
    title:{
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20,
        color: 'dodgerblue',
    },
    textContainer: {
        width: '100.5%',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
       
    },
    container:{
        backgroundColor: 'rgb(192,27,44)',
        
        borderColor: 'rgb(192,27,44)',
        borderWidth : 0.7,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
        width:'90%',
        height: 'auto',
        marginLeft: '5%'   
    },
    labelInput: {
        paddingHorizontal: 7,
        alignSelf: 'center',
        height: 40, 
        width: '95%',
        borderBottomColor: '#ccc', 
        borderBottomWidth: 1,
        //borderRadius: 10,
        //backgroundColor: 'white'

    },
    label:{
        color: 'rgb(50,50,50)',
        fontSize: 17,
        fontFamily : 'open-sans',
        //marginBottom: 3,
        marginTop : 10
    },
    subMsg :{
        fontSize: 15,
        textAlign: 'center',
        fontFamily : 'open-sans',
        marginTop : 20
    }
});

export default Course;