import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
//import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = props => {
    return(
        <View style = {styles.screen}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.title}>I Want to Help</Text>
                <Text style = {styles.info}>Search for Voluntary activities, join NGO's and make donations! </Text>
            </View>
            <ScrollView >
                <View style={styles.container}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Voluntaries',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-hand' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Voluntary Work</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Donation',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-cash' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Donations</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {styles.container}>   
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'NGOs'
                            });
                        }}
                    >
                        <Ionicons name = 'ios-heart' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >NGO's</Text>
                    </TouchableOpacity>

                </View>
                
            </ScrollView>
            
        </View>
    );
};

HelpScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Help',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        flexDirection: 'column',
        alignItems: 'center'
        
    },
    container:{
        
        alignSelf: 'center',
        flexDirection: 'row',
    },
    button: {
        
        margin: 20,
        width: 150,
        height: 120,
        padding : 15,
        borderColor : 'gray',
        alignSelf: 'center',
        backgroundColor: 'rgb(192,27,44)',
        borderRadius: 10
    },
    buttonText: {
        position: 'absolute', 
        bottom: 0,
        //textAlign: 'center',
        color : 'white',
        fontFamily: 'open-sans-bold',
        margin: 10
    },
    headerContainer:{
        width: '100%',
        height: 110,
        flexDirection: 'column',
        alignItems: 'center',

    },
    title:{
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    info:{
        marginTop: 5,
        width: '80%',
        fontSize: 20,
        textAlign: 'center'
    },
   
    
});

export default HelpScreen;