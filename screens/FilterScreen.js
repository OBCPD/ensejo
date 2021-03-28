import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';


import  FilterMinorities from '../components/FilterMinorities';
import CustomButton from '../components/CustomButton';
const FilterScreen = props =>{
    const parent = props.navigation.getParam('parent');


        return(
            <View style = {styles.screen}>
                <FilterMinorities navigation={props.navigation} parent={parent}  />   
            </View>
        );
    

};
FilterScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Filters',
    };
};
const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: '100%',
        alignContent: 'center',
        backgroundColor: 'rgb(240,240,240)',
        justifyContent: 'center'
    },


});
export default FilterScreen;