import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
//import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

const CultureScreen = props => {
    return(
        <View style = {styles.screen}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.title}>Culture and Conscientization</Text>
                <Text style = {styles.info}>Search for cultural groups or courses about gender, race, sexual orientation and others! </Text>
            </View>
            <ScrollView >
                <View style={styles.container}>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'YoutubeChannels',
                            });
                        }}
                    >
                        <Ionicons name = 'logo-youtube' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Youtube Channels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            props.navigation.navigate({
                                routeName : 'OnlineCourses',
                            });
                        }}
                    >
                        <Ionicons name = 'ios-desktop' size = {50} color = 'white' />
                        <Text style = {styles.buttonText} >Online Courses</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                props.navigation.navigate({
                                    routeName : 'Cultures',
                                });
                            }}
                        >
                            <Ionicons name = 'ios-calendar' size = {50} color = 'white' />
                            <Text style = {styles.buttonText} >Cultural Festivals</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
            
        </View>
    );
};

CultureScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Culture',
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

export default CultureScreen;