import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import NGO from '../components/NGO.js';

const NGOsScreen = props => {
    const tagsArray = props.navigation.getParam('tags');
    //console.log(tagsArray);
    const [infoUpdated, setInfoUpdated] = useState(false);
    const [jobData, setJobData] = useState([]);
    

    const renderI = dataI =>{
        console.log(dataI.index);
        return(
            <NGO name = {dataI.item.title} link = {dataI.item.link} desc = {dataI.item.description} />
        );
    }
    useEffect(()=>{
      
        fetch('https://my-test-esejo-app-default-rtdb.firebaseio.com/registers/ngos.json').then((response) => response.json()).then((responseJson) =>{

            
            setJobData(responseJson);  
            setInfoUpdated(true);
        });
    },[]);

    if(!infoUpdated){
        return(
            <View></View>
        );
    }
    else if(jobData.length != 0){
        return (
            <View style = {styles.screen}>
                <FlatList data = {jobData} renderItem = {renderI}></FlatList>
            </View>
        );
    }
    return (
        <View style = {styles.errorContainer}>
            <Text style = {styles.error} >There are still no options for the selected!</Text>
        </View>
    );
    
};
NGOsScreen.navigationOptions = navData => {
    return{
        headerTitle: 'NGOs',
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        
    },
    error:{
        fontSize: 15,
        textAlign: 'center',
        fontFamily : 'open-sans',
        marginTop : 20,
        color: 'red'
    },
    errorContainer: {
        alignSelf: 'center'
    }
});
export default NGOsScreen;