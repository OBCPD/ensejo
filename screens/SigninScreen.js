import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { FlatList, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
//import { HeaderButtons, Item} from 'react-navigation-header-buttons'



const SigninScreen = props => {
    return(
        <View style = {styles.screen}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninJobs');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Job</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninCultural');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Cultural Festival</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninEducation');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Eduction</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninManifestation');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Manifestation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninVoluntary');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Voluntary Work</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninDonation');
                    }}
                >
                    <Text style = {styles.buttonText} >Register donation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninNGO');
                    }}
                >
                    <Text style = {styles.buttonText} >Register NGO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninYoutube');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Youtube Channel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('SigninCourse');
                    }}
                >
                    <Text style = {styles.buttonText} >Register Online Course</Text>
                </TouchableOpacity>
                
            </ScrollView>
           
        </View>
    );
};

SigninScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Registers',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        
    },
    button: {
        
        margin: 20,
        width: '85%',
        padding : 10,
        borderColor : 'gray',
        alignSelf: 'center',
        backgroundColor: 'rgb(192,27,44)',
        borderRadius: 10
    },
    buttonText: {
        
        textAlign: 'center',
        color : 'white',
        fontFamily: 'open-sans-bold',
        margin: 10
    },
    adContainer: {
        position: 'absolute',
        bottom: 0
    }
});

export default SigninScreen;