import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import CustomButton from './CustomButton';


    
    

const FilterService = props =>{

    const [infoUpdated, setInfoUpdated] = useState(false);
    const [tagsData, setTagsData] = useState([]);
    const [tagsFlags, setTagsFlags] = useState([]);
    const [tagFlag, setTagFlag] = useState(false);
    const [tags, setTags] = useState([]);
    let auxTagsFlags = [];
    
    useEffect(()=>{
      
        fetch('https://my-test-esejo-app-default-rtdb.firebaseio.com/registers/tags.json').then((response) => response.json()).then((responseJson) =>{
            setTagsData([]);
            const tagsArray = responseJson;
            for(let i in tagsArray.lenght){
                auxTagsFlags.push(false); 
            }
            setTagsData(tagsArray);  
            // settagsFlags(auxtagsFlags);
            setInfoUpdated(true);
        });
    },[]);

    if(!infoUpdated){
        return(
            <View></View>
        );
    }

    const renderTags = dataI =>{
       
        return(
            <CheckBox title = {dataI.item} checked = {tagsFlags[dataI.index]} onPress = {() => {
                
                
                
                let aux = tags;
                
                for(let i in tagsData){
                    
                    if(i == dataI.index){
                        auxTagsFlags[i] = !tagsFlags[i];
                        console.log(auxTagsFlags[i]);
                    }
                    else{
                        auxTagsFlags[i] = tagsFlags[i];
                    }
                }
                
               
                setTagsFlags(auxTagsFlags);
                if(!auxTagsFlags[dataI.index]){
                    for(let i in aux ){
                        if(aux[i] === dataI.item ){
                            aux.splice(i);
                            setTags(aux);
                        }

                    }
                }
                else{
                    
                    setTags([...tags, dataI.item]);
                }
                
                
                
            }} />
        );
    }

    return (
    
        
            
            <View style = {styles.container}>
                <Text style = {styles.info}>Select the minorities you are included in, if nothing is selected, no filters will be applied</Text>
                <ScrollView style = {styles.formContainer}>
                    <Text style = {styles.label}>Minorities:</Text>
                    <View style = {styles.tagsContainer}>
                        
                        <FlatList data = {tagsData} renderItem = {renderTags} ></FlatList>
                    </View>
                    <CustomButton title = 'Next' onTouch = {()=>{
                        let tagsT = tags;
                        if(tags.length === 0){
                            tagsT = tagsData;
                        }
                        props.navigation.navigate({
                            routeName : (props.parent === 'Education') ? 'Education' : 'JobsBalcony',
                            params :{
                                tags: tagsT
                            }
                        });

                }} />
                </ScrollView>
            </View>
            
    );
  
};

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        
        //backgroundColor: 'white',
        
    },
    formContainer:{
        width: '80%',
        height: '100%',
        alignSelf: 'center'
    },
    scroll:{
        width: '100%',
        height: '100%',
        alignSelf: 'center'
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
    info:{
        width: '80%',
        alignSelf: 'center',
        color: 'rgb(192,27,44)',
        fontSize: 18,
        textAlign: 'center',
        fontFamily : 'open-sans-bold',
        marginBottom: 20,
        marginTop : 20
    },
    subMsg :{
        fontSize: 15,
        textAlign: 'center',
        fontFamily : 'open-sans',
        marginTop : 20
    },
    iconContainer :{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        marginTop: 9,
        marginRight: 2
    },
    tagsContainer:{
        marginTop: 5,
        width: '95%',
        paddingLeft: '5%'
    },
    descInput:{
        paddingHorizontal: 7,
        alignSelf: 'center',
        height: 60, 
        width: '95%',
        borderBottomColor: '#ccc', 
        borderBottomWidth: 1,
        //borderRadius: 10,
        //backgroundColor: 'white'
    }
});

export default FilterService;