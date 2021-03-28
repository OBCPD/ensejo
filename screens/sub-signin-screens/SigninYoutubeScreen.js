import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, FlatList , View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';


import CustomButton from '../../components/CustomButton';
import GenericInput from '../../models/GenericInput';


const SigninYoutubeScreen = props => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);

    const [submitMsgStyle, setSubmitMsgStyle] = useState({ });
    const [submitMsg, setSubmitMsg] = useState('');
    
    const inputTitleHandler = data =>{
        setTitle(data);
    }
    const inputLinkHandler = data =>{
        setLink(data);
    }
   
    const inputDescHandler = data =>{
        setDesc(data);
    }
   
  
    const submitHandler = () =>{
        if(title === '' || desc === '' || link === ''){
           
            setSubmitMsgStyle({color: 'red'});
            setSubmitMsg("There are empty mandatory fields!");
        }
        else if(submitMsg != "Sent with success!"){
            
            const filledForm = new GenericInput(title, desc, link);
        
            fetch('https://my-test-esejo-app-default-rtdb.firebaseio.com/registers/manifestation.json',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(filledForm)
            });
                        
            setSubmitMsgStyle({color: 'dodgerblue'});  
            setSubmitMsg("Sent with success!"); 
        }

    }

    return(
        <View style = {styles.screen}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps = 'handled' style = {styles.scroll}>
                <View style = {styles.formContainer}>
                    <Text style = {styles.label}>Course name:</Text>
                    <TextInput placeholder =  'name here' style = {styles.labelInput} onChangeText = {inputTitleHandler} value = {title}/>
                    
                   <Text style = {styles.label}>Description:</Text>
                    <TextInput maxLength = {500} multiline={true} placeholder =  'Description of up to a maximum of 500 characters'  style = {styles.descInput} onChangeText = {inputDescHandler} value = {desc}/>
                    
                    <Text style = {styles.label}>Link for your website:</Text>
                    <TextInput placeholder =  'URL here'  style = {styles.labelInput} onChangeText = {inputLinkHandler} value = {link}/>

                    <Text style = {{...submitMsgStyle, ...styles.subMsg}}>{submitMsg}</Text>
                    <CustomButton title = {'Submit'} onTouch = {submitHandler}/>
                    
    
                </View>
            </KeyboardAwareScrollView>

        </View>
    );
};

SigninYoutubeScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Register Course',
    };
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        width: '100%'
        
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
        color: 'dodgerblue',
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
    checkContainer: {
        width: '95%',
        paddingLeft: '10%'
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

export default SigninYoutubeScreen;