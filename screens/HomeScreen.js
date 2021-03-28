import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
//import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = props => {
    return(
        <View style = {styles.screen}>
            <View style = {styles.headerContainer}>
                <Image style={styles.headerImg} source={require('../assets/logoEnsejo.jpeg')} />
            </View>
            <ScrollView >
                <View style={styles.container}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Opportunities',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-document' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Opportunities</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Help',
                                
                            });
                        }}
                    >
                        <Ionicons name = 'ios-help-buoy' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >I Want to Help</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {styles.container}>   
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Culture'
                            });
                        }}
                    >
                        <Ionicons name = 'ios-bookmark' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Culture And Conscientization</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Signin',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-clipboard' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Register</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Home',
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        
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
        height: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(192,27,44)'

    },
    headerImg:{
        width: 150,
        height: 150,
    }
    
});

export default HomeScreen;