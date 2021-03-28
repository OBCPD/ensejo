import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
//import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const OpportunitiesScreen = props => {
    return(
        <View style = {styles.screen}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.title}>Opportunities</Text>
                <Text style = {styles.info}>Search for job opportunities, free online courses and many other social programs available for you </Text>
            </View>
            <ScrollView >
                <View style={styles.container}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Filters',
                                params : {
                                    parent : 'Job'
                                }
                            });
                        }}
                    >
                        <Ionicons name = 'ios-briefcase' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Job</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Filters',
                                params : {
                                    parent : 'Education'
                                }
                            });
                        }}
                    >
                        <Ionicons name = 'ios-school' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Education</Text>
                    </TouchableOpacity>
                    
                </View>
                
                <View style = {styles.container}>   

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'Manifestations',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-people' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Manifestations</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            
        </View>
    );
};

OpportunitiesScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Opportunities',
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

export default OpportunitiesScreen;