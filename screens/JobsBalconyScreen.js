import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import JobSearcher from '../components/JobSearcher';

const JobsBalconyScreen = props => {
    const tagsArray = props.navigation.getParam('tags');
    //console.log(tagsArray);
    const [infoUpdated, setInfoUpdated] = useState(false);
    const [jobData, setJobData] = useState([]);
    

    const renderI = dataI =>{
        console.log(dataI.index);
        return(
            <JobSearcher name = {dataI.item.title} link = {dataI.item.link} desc = {dataI.item.description} tags = {dataI.item.tags} />
        );
    }
    useEffect(()=>{
      
        fetch('https://my-test-esejo-app-default-rtdb.firebaseio.com/registers/jobs.json').then((response) => response.json()).then((responseJson) =>{

            const jobObject = responseJson;
            let aux = [];
            for( let i in jobObject){
                for(let k in jobObject[i].tags){
                    if(jobObject[i].flag && tagsArray.find(tag => tag === jobObject[i].tags[k]) != undefined){
                        aux.push(jobObject[i]);
                        break;
                    }
                }
            }
            setJobData(aux);  
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
            <Text style = {styles.error} >There are still no options for the selected minorities!</Text>
        </View>
    );
};
JobsBalconyScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Searching Jobs',
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
export default JobsBalconyScreen;