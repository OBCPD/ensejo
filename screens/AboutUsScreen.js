import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const AboutUsScreen = props => {

    return (
        <View style = {styles.screen}>
           
            
            <ScrollView>  
                <View style = {styles.imageContainer}>
                    <Image style = {styles.img} source= {require('../assets/splashEnsejo.jpeg')} />
                    
                </View>
                    
                <Text style={styles.subtitle}>About Us</Text>
                <View style={styles.aboutContainer}>
                <Text style = {styles.txt}>Ensejo was created with the purpose of providing opportunities for groups who suffer from social disadvantages. We hope to contribute to the improvement of the society for everyone, where people are free to express their beliefs, race, gender, sexual orientation, etc.</Text>
                
                   
                   
               </View> 
                    
            </ScrollView>
            
            <LinearGradient colors={['rgb(200,200,200)','rgb(225,225,225)', 'rgb(255,255,255)']} style = {styles.gradientStyle} >
                <Text style = {styles.footer}>"Amparo" Aluisio, Julia, Thiago e Marcos.</Text>
            </LinearGradient>
            
        </View>
    );
}
AboutUsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'About Us',
       
    }
};
const styles = StyleSheet.create({
    screen: {
        alignItems: "center", 
        justifyContent: 'center', 
        height: '100%',
        backgroundColor: 'rgb(240,240,240)',
        width: '100%',
        
    },
    textContainer: {
        width:'80%',
        alignItems: "center",   
    },
    subtitle : {
        fontFamily: 'open-sans-bold',
        fontSize: 35,
        color: 'rgb(192,27,44)',
        marginTop: 10,
        textAlign: "center",
    },
   
    txt:{
        marginTop: 5,
        textAlign: "center",
        fontFamily: 'open-sans',
        fontSize: 30,
        paddingBottom: 100
    },
    footer:{
        color:'rgb(192,27,44)',
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        backgroundColor: 'transparent',
        flex: 1,
        textAlign: 'center'
        
    },
    gradientStyle:{
        padding: 10, 
        alignItems: 'center', 
        width: '100%',
        position: 'absolute', 
        bottom: 0,
    },
    img : {
        width: 200,
        height: 200,
        borderColor: 'grey',
        borderWidth: .5,
        borderRadius: 30,
        backgroundColor :'white',
        alignSelf: 'center'

    },
   
    imageContainer:{
        marginTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    iconContainer :{
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        marginTop: 6,
        marginRight: 2
    },
    aboutContainer: {
        width: '95%',
        alignSelf: 'center'
    }
    

});
export default AboutUsScreen;